# Stuff be used in init for any shell

# docker/podman stuff
#alias docker="sudo docker"
#alias docker="podman"
alias dcompose="docker compose up -d --remove-orphans"
alias ddu="docker compose down && dcompose"
alias adb="sudo adb" # Needed on Fedora, not on Debian, IDK about other distros

alias ls="ls --color=auto -CF"
alias ll="ls -l"
alias la="ls -a"

# lol
alias please="sudo"
alias pwease="please"
alias pls="please"

if status is-interactive
    # kitty stuff
    if [ $TERM = xterm-kitty ]
        alias icat="kitten icat"
        alias s="kitten ssh"
    else
        alias icat="wezterm imgcat"
        alias s="ssh"
    end

    # NixOS
    if type -q nixos-rebuild
        alias nrs="sudo NIXPKGS_ALLOW_INSECURE=1 nixos-rebuild switch --upgrade-all"
        alias nrb="sudo NIXPKGS_ALLOW_INSECURE=1 nixos-rebuild build --upgrade-all"
        alias nrs-rb="sudo NIXPKGS_ALLOW_INSECURE=1 nixos-rebuild switch --upgrade-all --rollback"
        alias nrb-rb="sudo NIXPKGS_ALLOW_INSECURE=1 nixos-rebuild build --upgrade-all --rollback"
        alias hms="NIXPKGS_ALLOW_INSECURE=1 home-manager switch"
        alias hmb="NIXPKGS_ALLOW_INSECURE=1 home-manager build"
    end
end

# git
alias git-us="git submodule update --init --recursive"

# switch between SSH and HTTPS remotes
alias git-remote-switch="python3 -c \"import subprocess

remote = subprocess.getoutput('git branch -vv')
remote = remote[remote.find('[') + 1 : remote.find('/')]
old_url = subprocess.getoutput(f'git remote get-url {remote}')

if old_url.startswith('https://'):
    new_url = old_url[8:]
    new_url = new_url[: new_url.find('/')] + ':' + new_url[new_url.find('/') + 1 :]
    new_url = f'git@{new_url}'
else:
    new_url = old_url[4:]
    new_url = new_url.replace(':', '/')
    new_url = f'https://{new_url}'

exit(subprocess.getstatusoutput(f'git remote set-url {remote} {new_url}')[0])\""

alias venv="if ! test -d ./.venv/; python3 -m venv .venv; end; source ./.venv/bin/activate.fish"
alias py-dep="pip install -r requirements.txt"

alias sway="sway --unsupported-gpu"
if [ $(tty) = /dev/tty1 ]
    sway
end

# run code in wayland natively
# TODO: just add it to the args file instead(?)
alias code="code --ozone-platform=wayland"

function dwarfs-overlay -a dwarfs_image
    set working_dir $(dirname $dwarfs_image)
    set without_ext $(basename $dwarfs_image ".dwarfs")
    mkdir -p $working_dir/$without_ext
    mkdir -p $working_dir/.$without_ext
    mkdir -p $working_dir/.$without_ext/{ro,rw,workdir}
    dwarfs $dwarfs_image $working_dir/.$without_ext/ro -o allow_root
    sudo mount -t overlay overlay -o lowerdir=$working_dir/.$without_ext/ro,upperdir=$working_dir/.$without_ext/rw,workdir=$working_dir/.$without_ext/workdir $working_dir/$without_ext
end
