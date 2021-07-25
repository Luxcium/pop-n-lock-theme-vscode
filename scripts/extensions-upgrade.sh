#!/bin/env bash

fallback_dir=./~tmp

: ${TMPDIR:="/tmp"}
if [-d "${TMPDIR}"]
then
: ${MYTMPDIR:="$(mktemp -d $TMPDIR/get-extensions.XXXXXXXXXX)"}
else
: ${MYTMPDIR:="$(mktemp -d $fallback_dir/get-extensions.XXXXXXXXXX)"}
fi

echo $MYTMPDIR
