#!/bin/bash
# Renders an HTML page to a PNG at an exact pixel size with headless Chrome.
#
#   render.sh <page.html> <out.png> <width> <height> [scale]
#
# width/height are the canvas in CSS pixels; scale (default 1) multiplies the
# output — 2 gives a crisp retina export of a 1x-sized design. The page loads
# Tailwind and Inter from the web, so the script waits for the network to
# settle (virtual time) before it shoots.
set -euo pipefail

HTML="${1:?usage: render.sh <page.html> <out.png> <width> <height> [scale]}"
OUT="${2:?missing output path}"
W="${3:?missing width}"
H="${4:?missing height}"
SCALE="${5:-1}"

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
if [ ! -x "$CHROME" ]; then
  # Fall back to a Playwright-managed Chromium if Chrome isn't installed.
  CHROME="$(ls -d "$HOME"/Library/Caches/ms-playwright/chromium-*/chrome-mac*/Chromium.app/Contents/MacOS/Chromium 2>/dev/null | tail -1 || true)"
fi
[ -x "$CHROME" ] || { echo "No Chrome or Chromium found; set CHROME=/path/to/chrome" >&2; exit 1; }

ABS_HTML="$(cd "$(dirname "$HTML")" && pwd)/$(basename "$HTML")"
mkdir -p "$(dirname "$OUT")"
ABS_OUT="$(cd "$(dirname "$OUT")" && pwd)/$(basename "$OUT")"
PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

"$CHROME" --headless=new --disable-gpu --hide-scrollbars --no-first-run \
  --user-data-dir="$PROFILE" \
  --force-device-scale-factor="$SCALE" \
  --window-size="$W,$H" \
  --virtual-time-budget=10000 \
  --screenshot="$ABS_OUT" \
  "file://$ABS_HTML" >/dev/null 2>&1

# Report the real size so a wrong canvas is noticed at once.
sips -g pixelWidth -g pixelHeight "$ABS_OUT" 2>/dev/null | awk '/pixel/ {printf "%s=%s ", $1, $2} END {print ""}'
echo "$ABS_OUT"
