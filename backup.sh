#!/usr/bin/env bash
GIT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)

rm -rf $GIT_DIR/fish
rm -rf $GIT_DIR/kitty
rm -rf $GIT_DIR/nvim
rm -rf $GIT_DIR/gnupg

cp -r $HOME/.config/fish/ $GIT_DIR
mv $GIT_DIR/fish/conf.d/universal.fish $GIT_DIR/universal-shellrc.txt
cp -r $HOME/.config/kitty/ $GIT_DIR
cp -r $HOME/.config/nvim/ $GIT_DIR

mkdir $GIT_DIR/gnupg
cp $HOME/.gnupg/gpg.conf $GIT_DIR/gnupg/
cp $HOME/.gnupg/gpg-agent.conf $GIT_DIR/gnupg/
