#!/bin/bash

SCRIPT_DIR=$(cd $(dirname $0);pwd)

cp "$*" "/tmp/view360.jpg"
google-chrome --allow-file-access-from-files "$SCRIPT_DIR/index.html"

