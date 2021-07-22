#!/usr/local/bin/zsh
TMUX_SESSION='VSCODE'
TMUX_WINDOW_0='VS-Code'

tmux has-session -t $LXI_SESSION 2>/dev/null
if [ $? != 0 ]; then
    tmux new -D -s $LXI_SESSION -d -n $TMUX_WINDOW_0 -c $LUXCIUM_IO_PATH
else
    tmux new-window -t $LXI_SESSION -n $TMUX_WINDOW_0 -c $LUXCIUM_IO_PATH
fi

tmux has-session -t $VS_CODE_SESSION 2>/dev/null
if [ $? != 0 ]; then
    tmux new -D -s $VS_CODE_SESSION -d -n $TMUX_WINDOW_0 -c $LUXCIUM_IO_PATH
fi

tmux link-window -s $LXI_SESSION -t $VS_CODE_SESSION
tmux attach -t $TMUX_SESSION
tmux source "$TMUX_CONFIG_PATH"/common.tmux.conf
tmux source "$TMUX_CONFIG_PATH"/theme.tmux.conf
