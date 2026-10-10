# The website's product mockups

All in `src/components/mock/`, written with Tailwind and the `brand-*` tokens, sized for the website (a phone is 230 px wide). They are drawings of the real product with real-looking data; keep them in sync with the app if you change one.

| File | Shows | Good for |
|---|---|---|
| `AppWindow.astro` | browser frame with the web app's top bar (Verlauf, Aufgaben, Erfassen, Reporteditor, Einstellungen), frog and "Froggi" | wrapping any web-app screen; `active` highlights a tab |
| `ReportMock.astro` | the three-step report (Objekt › Aktion › Details) | "Erfassen", speed, simplicity |
| `EditorMock.astro` | the report editor: categories, actions, fields | "Ihr Vokabular", no-code configuration |
| `HistoryMock.astro` | the history timeline with reports | traceability, history per object |
| `ObjectTree.astro` | nested objects (Liegenschaft › Mieteinheit …) | own structures, property management |
| `TasksMock.astro` | the web task list with reminders/alerts | tasks, "Sehen, was fällig ist" |
| `PhoneMock.astro` | the mobile app's task list, offline, sync banner, tab bar | offline, mobile, App Store |

Porting notes:

- The front matter (`---` block) holds the sample data and the loops' arrays; write the `.map(...)` loops out as plain repeated markup.
- `<Icon name="x" class="…" />` → `<svg class="…" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">` + the path string for `x` from `src/components/Icon.astro` + `</svg>`.
- `AppWindow` uses `<slot />` for its content and `/froggi-frog.svg` — use the copied `froggi-frog.svg` instead.
- Responsive prefixes (`sm:`, `lg:`) refer to the page width; on a fixed canvas, drop them and keep the variant you want visible.
- `assets/example-linkedin-offline.html` shows a ported `PhoneMock` scaled 1.75× on a portrait post.

For screens no mockup covers, build them in the same style (white cards, `border-brand-border`, 10–13 px text at mockup scale) from the real app — the dev app runs at http://localhost:5173 (see `../corev2/dev/README.md`), and a screenshot of it is a valid reference.
