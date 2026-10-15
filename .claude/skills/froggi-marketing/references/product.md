# What Froggi is and does

Status as of October 2026. **live** = in the product and on the demo; **coming** = built, not yet released; **planned** = decided or discussed, not built. When a fact here and the product disagree, the product wins — check `../corev2` (README, `docs/requirements*`) and update this file.

## In one sentence

Froggi is the documentation platform for teams in the field: your own forms, filled in in the browser or offline on the phone, with a complete history and tasks per object.

## The idea

Froggi imposes no fixed form. An organisation describes its work once — what kinds of objects it has, which actions happen on them, which details belong to each action — and from then on the team records each piece of work in three steps: **Objekt › Aktion › Details**. Everything recorded becomes the object's history; what is due shows up as tasks.

## Features

### Recording (live)

- **Three-step report:** which object, which action, the details. Only actions that apply to that kind of object are offered.
- **Seven field types:** single choice, multiple choice, free text, number (slider with min/max), date, photo, location (GPS).
- **Visibility rules:** fields appear only when needed — also depending on the object's master data.
- **Required fields**, with the form refusing to submit without them.
- **Recorded time vs. saved time** kept apart — a report filed later still shows when the work was done.
- **Recently used objects** offered first — a personal choice in the profile, off by default.

### The report editor (live)

- Categories, actions and fields defined without code, in a visual editor.
- Edits are a **draft** until "Übernehmen" (take over); every change is a new **revision**, and existing reports stay exactly as they were recorded.
- Labels in every language of the instance.

### Objects and structures (live)

- **Own structures**, nested as the organisation is: Liegenschaft › Mieteinheit / Allgemeinbereich / Technische Anlage; Station › Zimmer; Team › Person.
- **Master data** per object (fields, photos), shown on designed **object cards**.
- Stepping through levels while reporting (building first, then the flat).

### History (live)

- Chronological, endlessly scrolling, **full-text search**, filters by period, object and action.
- Each report opens as it was filed, **photos enlarge** on click.
- Older reports move to an **archive** automatically and stay findable.

### Tasks, reminders, alerts (live)

- One list of everything open, each task tied to an object and leading straight to the right report.
- **Reminders:** weekly schedule, interval since last done, or as a follow-up to a report.
- **Alerts:** on thresholds, repeated reports, or a missed reminder.
- **Tasks by people**, with notes and sub-steps.

### Mobile app

- **live (Android & iOS builds):** same forms as the browser, camera, location, **offline recording** with an outbox that sends reports and photos once there is signal, without duplicates. Sync bar shows what's waiting.
- **iOS:** in TestFlight (October 2026), **not yet in the App Store** — say "App für iOS und Android" only where the piece is not a download call; never "jetzt im App Store".
- NFC login is not in the app (see below).

### People and access (live)

- Each person is placed on the object tree and sees that object and everything beneath it — visibility follows the object. Permissions say what they may do.
- **Single sign-on** via Microsoft Entra ID, Google Workspace, Okta, Keycloak or any OpenID Connect provider (Enterprise plan).
- **NFC login — coming.** The server side is built (log in by holding a badge to a reader, for shared devices on a ward or in a caretaker's office), but neither the web app nor the mobile app has the login screen for it yet. Mention only as "demnächst" (the website marks it so).

### Templates (live)

- **Template marketplace** inside Froggi: install a ready-made industry template, with a dry-run preview first; vendor-signed; updates offered when the template improves; afterwards it's yours to adapt.
- Available now: **Immobilienbewirtschaftung (CH)** — 4 object structures, 6 categories, 19 actions, 227 fields, in DE/FR/IT/EN.
- **planned:** a template for care (Pflege & Betreuung).

### Integration and data (live)

- **Import & export** of the whole configuration as a portable file, with a dry run, never touching existing reports.
- **Open API** — everything the app does, also by interface (Business and Enterprise).
- **Audit log:** who created, changed or deleted a report, and when; append-only.

### AI connection via MCP (live, Professional and up)

- Every instance has a **Model Context Protocol** server: the customer connects the AI they already use (Claude, ChatGPT, an own agent) with one URL and a per-person OAuth sign-in.
- **The AI is the user, never more** — it sees what the signed-in person sees and proposes only what they could do.
- The report editor's tools are live: the AI reads definitions and writes changes **as the editor's draft**; a person reviews and takes it over ("Übernehmen") or discards it.
- Admins decide who may connect and see connected apps (Settings › MCP).
- Other read tools (reports, objects, tasks) and the in-app assistant are **planned**.
- Voice: say "Ihre KI anbinden", never "KI-gestützt".

### Help (live, web)

- **Help center** with searchable articles and **guided tours** over the real UI, on every plan. In the web app; the mobile app is planned.

### Languages (live)

Interface in German, French, Italian and English. Reports (categories, actions, fields, option values) can be translated into any ISO 639 language — say "jede Sprache nach ISO 639".

### Security and operations (live)

- Hosted by Froggi or **self-hosted** on own infrastructure as containers, with separate stores for active data and archive.
- Sessions in httpOnly cookies, revoked on logout and password change; limited login attempts; strict security headers.
- Versioned definitions and an audit trail: what was documented stays provable.
- **Hosting location:** not decided yet. Do **not** claim "Hosting in der Schweiz" — write "Hosting bei uns oder auf Ihrer Infrastruktur".
- **No certifications** (ISO 27001, etc.) — don't imply any.

## Plans and trial

See `pricing.md`: Starter / Professional / Business / Enterprise, launch pricing on the website.

## Things Froggi is not

Not a care-planning or billing system, not a property-accounting system (no rents, no ledgers), not a CAFM with maintenance contracts and spare parts. No built-in AI model: Froggi lets the customer's own AI connect (see MCP). Froggi documents work and keeps track of what's due; it sits beside those systems (export, API), not instead of them.
