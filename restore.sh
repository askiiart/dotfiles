#!/usr/bin/env bash
shopt -s extglob # used for not copying config.fish if it's nixos, and for librewolf
GIT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)

command_exists() { type "$1" &>/dev/null; }

# fish
rm -rf $XDG_CONFIG_HOME/fish/
if command_exists "nixos-rebuild"; then
    cd $GIT_DIR/fish/
    mkdir $XDG_CONFIG_HOME/fish/
    cp -r !(config.fish) $XDG_CONFIG_HOME/fish/
    cd -
else
    cp -r $GIT_DIR/fish/ $XDG_CONFIG_HOME/
fi
fish -c 'fisher update'
fish -c "tide configure --auto --style=Classic --prompt_colors='True color' --classic_prompt_color=Dark --show_time='24-hour format' --classic_prompt_separators=Vertical --powerline_prompt_heads=Sharp --powerline_prompt_tails=Flat --powerline_prompt_style='One line' --prompt_spacing=Compact --icons='Many icons' --transient=No"

# kitty
rm -rf $XDG_CONFIG_HOME/kitty/
cp -r $GIT_DIR/kitty/ $XDG_CONFIG_HOME/

# nvim
rm -rf $XDG_CONFIG_HOME/nvim/
cp -r $GIT_DIR/nvim/ $XDG_CONFIG_HOME/

# gpg
rm -f $HOME/.gnupg/gpg-agent.conf
rm -f $HOME/.gnupg/gpg.conf
mkdir $HOME/.gnupg
cp -r $GIT_DIR/gnupg/* $HOME/.gnupg/

# i3
rm -rf $XDG_CONFIG_HOME/i3
cp -r $GIT_DIR/i3 $XDG_CONFIG_HOME/

# sway
rm -rf $XDG_CONFIG_HOME/sway
cp -r $GIT_DIR/sway $XDG_CONFIG_HOME/
outputs=$(swaymsg -t get_outputs)
width=$(echo $outputs | jq -r .[0].modes.[0].width)
height=$(echo $outputs | jq -r .[0].modes.[0].height)
sed -i "s/set \$lockwall \"swaylock -i ~\/\.config\/sway\/backgrounds\/widthxheight\.png\"/set \$lockwall \"swaylock -i ~\/\.config\/sway\/backgrounds\/${width}x${height}\.png\"/g" $XDG_CONFIG_HOME/sway/config

# greetd (for sway)
if [ -d /etc/greetd ]; then
    sudo rm /etc/greetd/config.toml
    sudo cp $GIT_DIR/greetd/config.toml /etc/greetd/config.toml
fi

# xinitrc
cp $GIT_DIR/other-files/.xinitrc $HOME/.xinitrc

# Claws Mail configs
mkdir $HOME/.claws-mail/
cp $GIT_DIR/claws-mail/clawsrc $HOME/.claws-mail/clawsrc
cp $GIT_DIR/claws-mail/matcherrc $HOME/.claws-mail/matcherrc

# rofi
rm -rf $XDG_CONFIG_HOME/rofi/
cp -r $GIT_DIR/rofi $XDG_CONFIG_HOME/rofi/

# GTK dark theme
mkdir ~/.config/gtk-3.0
echo -e "[Settings]\ngtk-application-prefer-dark-theme = true" >~/.config/gtk-3.0/settings.ini
gsettings set org.gnome.desktop.interface color-scheme prefer-dark
gsettings set org.gnome.desktop.interface gtk-theme Adwaita-dark

# fix-gamepad.service
if ! command_exists "nixos-rebuild" && command_exists "systemctl"; then
    sudo cp $GIT_DIR/systemd/fix-gamepad.service /etc/systemd/system/
    #sudo systemctl enable --now fix-gamepad.service
fi

# fontconfig
rm -rf $XDG_CONFIG_HOME/fontconfig/conf.d/
mkdir -p $XDG_CONFIG_HOME/fontconfig/conf.d/
cp -r $GIT_DIR/fontconfig/* $XDG_CONFIG_HOME/fontconfig/conf.d/

# waybar
rm -rf $XDG_CONFIG_HOME/waybar/
mkdir $XDG_CONFIG_HOME/waybar/
cp -r $GIT_DIR/waybar/* $XDG_CONFIG_HOME/waybar/

# sway-runner
# TODO: make this work on nix too
if command_exists "xbps-install"; then
    sudo cp $GIT_DIR/sway-runner /usr/bin/sway-runner
    sudo chown root /usr/bin/sway-runner
fi

# Librewolf
# to make sure a profile exists to apply this to
if [ $(find ~/.librewolf -mindepth 1 -maxdepth 1 -type d -name "*.*" | wc -l) -eq 0 ]; then
    librewolf &
    sleep 1
    pkill librewolf
    sleep 1
fi

cd ~/.librewolf
for dir in $(find . -mindepth 1 -maxdepth 1 -type d -name "*.*"); do
    cp -r $GIT_DIR/librewolf/* $dir
done

# WezTerm
wezterm shell-completion --shell fish >~/.config/fish/completions/wezterm.fish
cp $GIT_DIR/wezterm.lua ~/.wezterm.lua
gsettings set org.cinnamon.desktop.default-applications.terminal exec wezterm-gui

# Git config
cp $GIT_DIR/gitconfig ~/.gitconfig

# wayfire
rm -rf $XDG_CONFIG_HOME/wayfire
cp -r $GIT_DIR/wayfire $XDG_CONFIG_HOME

# VS code
mkdir -p $XDG_CONFIG_HOME/Code/User/
mkdir -p $HOME/.vscode/
cp $GIT_DIR/vscode/keybindings.json $XDG_CONFIG_HOME/Code/User/
cp $GIT_DIR/vscode/settings.json $XDG_CONFIG_HOME/Code/User/
if command_exists "code"; then
    code $(for ext in $(cat $GIT_DIR/vscode/extensions.txt); do echo -n "--install-extension $ext "; done)
    cp $GIT_DIR/vscode/argv.json $HOME/.vscode/argv.json
elif command_exists "code-oss"; then
    code-oss $(for ext in $(cat $GIT_DIR/vscode/extensions.txt); do echo -n "--install-extension $ext "; done)
    cp $GIT_DIR/vscode/argv.json $HOME/.vscode-oss/argv.json
fi
# VS code: run in wayland natively
sudo sed '/^Exec=\/usr\/share\/code\/code\( --new-window\)\? %F$/ s/$/ --ozone-platform=wayland/' -i /usr/share/applications/code.desktop

# default applications
xdg-settings set default-web-browser librewolf.desktop

echo "restore.sh done!"
