#!/usr/bin/env bash
GIT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)

rm -rf $HOME/.config/fish/
rm -rf $HOME/.config/kitty/
rm -rf $HOME/.config/nvim/

cp -r $GIT_DIR/fish/ $HOME/.config/
cp $GIT_DIR/universal-shellrc.txt $HOME/.config/fish/conf.d/universal.fish
cp -r $GIT_DIR/kitty/ $HOME/.config/
cp -r $GIT_DIR/nvim/ $HOME/.config/
