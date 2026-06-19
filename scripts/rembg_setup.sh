#!/usr/bin/env bash
set -e
cd "$(dirname "$0")/.."
if ! python3 -m pip --version >/dev/null 2>&1; then
  echo "bootstrapping pip..."
  curl -sS https://bootstrap.pypa.io/get-pip.py -o /tmp/get-pip.py
  python3 /tmp/get-pip.py --user --break-system-packages
fi
echo "installing rembg (puede tardar varios minutos)..."
python3 -m pip install --user --break-system-packages --quiet \
  rembg onnxruntime pillow pymatting numpy
echo "running cutout..."
python3 scripts/rembg_cut.py
