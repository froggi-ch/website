# Brand

## Logo

A jumping frog — the idea behind "Mach den Sprung". Files:

- `public/froggi-frog.svg` (this repo) — the mark used on the website.
- `../corev2/branding/` — `froggi-frog.svg` and app icons (`froggi-icon-bold`, `-cream`, `-white`, as SVG and PNG).

The mark sits beside the word "Froggi" set bold in accent-dark (`#244733`), as in the app's top bar. Don't redraw, recolour or rotate the frog; on dark backgrounds use the white icon.

## Colours

A desaturated sage family derived from the frog (hue ~140). The website and the app share it (`tailwind.config.mjs`, `corev2/web/src/styles.css`).

| Token | Hex | Use |
|---|---|---|
| accent | `#436b4e` | primary buttons, links, highlights |
| accent-dark | `#244733` | hover, the frog's eyes, dark headlines on light |
| sage | `#a2cdab` | soft accents, illustrations |
| soft | `#eaf5ee` | tinted panels, badges |
| ink | `#15231b` | text |
| muted | `#617567` | secondary text |
| bg | `#f6f9f7` | page background |
| border | `#e4ece7` | lines, card borders |
| surface | `#ffffff` | cards |

Definition-icon tones used in product screens: green `#2f6b45`, amber `#97590c`, red `#b23434`, blue `#2f5b9c`, violet `#57459c`, slate `#4c5a51`, each on its pale background.

## Type

The app's system stack (`-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`) — no web font, so the website and product screens read as one product (Froggi v2, October 2026). Headlines 700 with negative tracking (−0.02 to −0.03em); body 400. No second typeface.

## Look

Calm, light, lots of white space, the v2 shapes: cards 12 px, rails and tiles 16 px, thin borders, soft shadow; icons sit on pale tone tiles (`tone-*` in `tailwind.config.mjs`), counters on round tone discs. Product screenshots and device mockups carry the visuals — real screens, not stock photos of people at laptops. Line icons, 24 px grid, round caps, 1.8 stroke (`src/components/Icon.astro`).
