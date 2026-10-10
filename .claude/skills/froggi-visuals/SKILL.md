---
name: froggi-visuals
description: Creates Froggi marketing images — LinkedIn and Instagram posts, banners, story formats, Open Graph / link-preview images, App Store and Play Store screenshots, flyer and slide visuals, feature announcement graphics — by building them as HTML in Froggi's brand style (sage palette, Inter, the frog, the website's product mockups) and rendering them to PNG at the exact size with headless Chrome. Use it whenever someone wants a picture, graphic, visual, banner, post image, cover, screenshot set or mockup for Froggi, even if they just say "make an image for this post" or "we need something for LinkedIn".
---

# Froggi visuals

Froggi's visuals sell a calm, precise tool, so they should look like one: light sage backgrounds, plenty of white space, Inter, and the product itself — real-looking screens — as the hero. Not stock photos, not illustrations of people at laptops. Build every image as an HTML page and render it; that keeps text sharp and correct, colours exact, and the product screens identical to the website's.

## Workflow

1. **Settle the brief.** Format and size (see the table), the one message the image carries, and its words. If the image needs copy, write it with the **froggi-marketing** skill's rules (facts and status in its `references/product.md`) — an image claims things just as loudly as a text. One headline, at most one supporting line; an image is not a paragraph.

2. **Set up a working folder** — a scratch directory, or `marketing/visuals/<name>/` in this repo if the result should be kept. Copy into it:
   - `assets/canvas.html` (this skill) → `<name>.html`
   - `public/froggi-frog.svg` (this repo) → next to it, for `<img src="froggi-frog.svg">`

3. **Build the page.** Set `--w`/`--h` in `:root` to the canvas size, then compose inside `<main class="canvas">`. Tailwind is loaded with the website's colour tokens (`brand-accent`, `brand-soft`, `brand-ink`, `brand-muted`, …) and `shadow-window`/`shadow-lift`, so:
   - **Product screens:** port the matching mockup from `src/components/mock/*.astro` (see `references/mockups.md` for which shows what). Astro is HTML plus small loops — write the loop out as plain markup and replace `<Icon name="…" />` with the inline SVG from `src/components/Icon.astro`. Scale a mockup up with `transform: scale(…)` rather than re-sizing every class: it keeps the proportions the website already tuned.
   - **Text:** large and few. As a guide on a 1080 px canvas: headline 64–84 px bold, supporting line 28–34 px in `text-brand-muted`, eyebrow chip 20–24 px.
   - **Brand:** the frog with "Froggi" (Inter bold) once, small, in a corner — never as decoration repeated over the image.
   - `assets/example-linkedin-offline.html` is a finished example to start from; its render is `assets/example-linkedin-offline.png`.

4. **Render.**
   ```bash
   .claude/skills/froggi-visuals/scripts/render.sh <name>.html <name>.png <width> <height> [scale]
   ```
   It prints the real pixel size — check it matches. Use `scale` 2 for print or when a platform wants double resolution of a smaller design.

5. **Look at the PNG** (read the image) before handing it over, and fix what you see: text cut off or overlapping the mockup, a mockup cropped at an awkward place (crop through a list, not through a heading), empty bands, unreadable small text at the size it will be shown (a phone feed shows a 1080 px post at ~360 px — anything under ~22 px is noise there). Re-render after each fix. Two or three passes is normal.

6. **Deliver** the PNG (and the HTML, so it can be edited later), and a one-line note on anything claimed that is "coming" or a placeholder.

## Sizes

| Use | Canvas (px) |
|---|---|
| LinkedIn / Instagram post, portrait (best reach) | 1080 × 1350 |
| LinkedIn / Instagram post, square | 1080 × 1080 |
| Story / Reel cover | 1080 × 1920 |
| LinkedIn page banner | 1128 × 191 (render at scale 2) |
| LinkedIn personal banner | 1584 × 396 |
| Open Graph / link preview (website, newsletter) | 1200 × 630 |
| App Store screenshot, iPhone 6.9″ | 1320 × 2868 |
| App Store screenshot, iPhone 6.5″ | 1284 × 2778 |
| Google Play phone screenshot | 1080 × 1920 |
| Slide visual (16:9) | 1920 × 1080 |
| Flyer A4, print | 1240 × 1754 at scale 2 (= 300 dpi) |

Platforms change these; if a size looks off for the destination, say so instead of guessing.

## Rules that keep the look consistent

- **Background:** `glow` (sage radial on `brand-bg`) or plain `brand-bg`; `brand-accent` full-bleed only for a single bold statement (then text white, frog white icon from `../corev2/branding/froggi-icon-white.svg`).
- **Colour beyond the palette** only where the product uses it: the amber offline banner, the red/amber/muted task group labels, the definition-icon tones (see the marketing skill's `references/brand.md`).
- **Content in mockups is the product's real vocabulary:** Bahnhofstrasse 12, Whg. 302, Treppenhaus A, Heizung – Gaskessel, Wohnungsabnahme, Treppenhausreinigung — or, for care, Zimmer and Bewohner names that are clearly fictional. Never real people's names or real addresses of customers.
- **Show only what the product has.** A mockup is a claim: don't draw screens or buttons for "coming" features (NFC login, care template) unless the image is about the roadmap and says so.
- **App Store screenshots** must show the app as it is (Apple rejects misleading ones): mockups ported from `PhoneMock.astro` or real simulator screenshots, a short headline above each.
- **No** gradients beyond the sage glow, no drop shadows on text, no emoji, no clip-art icons — the line icons from `Icon.astro` only.

## When rendering fails

- Fonts or Tailwind missing in the PNG (serif text, no layout): the page loads both from the web — check the network, or raise `--virtual-time-budget` in `render.sh`.
- No Chrome: set `CHROME=/path/to/chrome`; the script also finds a Playwright Chromium in `~/Library/Caches/ms-playwright`.
