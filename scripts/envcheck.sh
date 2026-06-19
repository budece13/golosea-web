#!/usr/bin/env bash
echo "python3: $(python3 --version 2>&1)"
echo "pip3: $(pip3 --version 2>&1 || echo none)"
python3 -c 'import venv; print("venv: ok")' 2>&1
echo "net github: $(curl -s -o /dev/null -w '%{http_code}' --max-time 8 https://github.com 2>&1)"
echo "net pypi: $(curl -s -o /dev/null -w '%{http_code}' --max-time 8 https://pypi.org 2>&1)"
