#!/usr/bin/env bash
if [ $(whoami) == "root" ]; then
    echo "Run as a normal user, not root"
    exit 1
fi
GIT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)

# gnome-keyring is for VS Code
yay -S gnome-keyring --noconfirm --needed
yay -S i3status j4-dmenu-desktop swaylock swaybg swaync clipman --noconfirm --needed
yay -S iwgtk --noconfirm --needed
yay -S pipewire-pulse pavucontrol blueman bluetooth-support qpwgraph --noconfirm --needed
yay -S brightnessctl --noconfirm --needed
yay -S nemo gnome-calculator --noconfirm --needed
# for screenshots and color picker
yay -S slurp grim zenity imagemagick --noconfirm --needed

# Install catppuccin grub theme
git clone --depth=1 https://github.com/catppuccin/grub
sudo cp -r ./grub/src/* /usr/share/grub/themes/
rm -rf grub/
sudo sed -i 's/#GRUB_THEME="\/path\/to\/gfxtheme"/GRUB_THEME=\/usr\/share\/grub\/themes\/catppuccin-mocha-grub-theme\/theme.txt/g' /etc/default/grub
sudo grub-mkconfig -o /boot/grub/grub.cfg

# greetd, replaced by ly which should be preinstalled
#yay -S greetd --noconfirm --needed
#sudo cp $GIT_DIR/greetd/config.toml /etc/greetd/config.toml
#sudo systemctl enable greetd.service
