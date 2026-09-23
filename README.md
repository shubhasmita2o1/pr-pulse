# PR Pulse

https://github.com/shubhasmita2o1/pr-client-campaign-tracker.git Build a production-quality internal SaaS web app UI for a PR agency:

**Product name:** PR Client & Campaign Tracker  

**Users:** small PR agency team (not consumers)  

**Purpose:** manage clients, meetings, call transcripts, proposals (PDFs), and outbound PR campaigns with performance metrics and screenshot-based metric extraction.

IMPORTANT CONSTRAINTS

- Stack target: React + TypeScript + Vite + Tailwind CSS. Prefer clean components, no heavy animation library required.

- Design for desktop-first (1440px), usable at 1280px. Mobile is secondary.

- Do NOT use the usual AI-SaaS look: no purple/violet gradients, no neon indigo, no generic “AI purple glow”, no dark-only cyber theme.

- Use a FRESH, distinctive palette inspired by editorial / modern media brands:

  - Primary: deep teal `#0F766E` (actions, active nav)

  - Accent: warm coral `#F97316` (highlights, important CTAs sparingly)

  - Success: `#10B981`

  - Warning: `#F59E0B`

  - Surface: warm off-white `#FAF7F2` and soft sand `#F3EEE7`

  - Cards: pure white `#FFFFFF` with subtle warm border `#E8E2D9`

  - Text: ink `#1C1917` and muted `#78716C`

  - Optional soft chart colors: teal, coral, amber, slate — never purple

- Typography: modern geometric sans (e.g. Inter or similar). Clear hierarchy. Generous whitespace, tight professional density for tables.

- Visual style: calm editorial SaaS — rounded-xl cards, soft shadows, refined borders, minimal chrome. Feel like a premium agency ops tool, not a consumer AI app.

- Include light mode as default. Optional simple dark mode is fine but light is primary.

- All screens should look cohesive and “finished”, with empty states, loading skeletons, and sensible placeholders.

- Use realistic PR-agency sample data (clients like NovaTech, GreenLeaf, Finova; meetings; campaigns with impressions/opens/clicks).

INFORMATION ARCHITECTURE (sidebar + top bar)

Left sidebar navigation:

1. Dashboard

2. Clients

3. Meetings

4. Transcripts

5. Campaigns

6. Imports (historical XLSX)

7. Settings (team / integrations placeholders)

Top bar: global search, date range or month filter where relevant, user avatar menu.

SCREENS TO BUILD

1) Dashboard

- KPI cards: Active clients, Meetings this month, Open campaigns, Transcripts pending review

- Two charts: meetings over last 6 months; campaign performance (impressions vs coverage)

- Recent activity feed (meetings booked, transcripts ingested, metrics extracted)

- Quick actions: Add client, Schedule meeting, Upload campaign screenshot, Import XLSX

2) Clients

- Filterable table/list: name, company, status (active/prospect/churned), tier, industry, owner, retainer

- Status chips with the palette above (not purple)

- Search + filters: status, tier, industry

- Client detail page/panel: overview, contacts, meetings list, proposals (PDF list with upload UI), notes, tags

3) Meetings

- Calendar-ish list or agenda view + table toggle

- Fields: title, client, date/time, duration, type, location, transcript status (none/pending/has_transcript)

- Badges for source: Cal.com / Google Calendar / Manual

- Meeting detail: attendees, notes, linked transcript CTA

4) Transcripts

- List of multi-part transcripts: title, client, date, source (Read AI / manual), linked meeting

- Detail view: key takeaways, action items checklist, speaker segments timeline

- Empty state when no transcript linked

5) Campaigns

- Campaign cards or table: title, client, status, date range, tags

- Campaign detail:

  - Brief/copy text area

  - Metrics table by channel: pitched, impressions, opens, clicks, replies, coverage secured, response rate

  - “Extract from screenshot” panel: drag-drop image upload, processing state, confidence score, apply-to-table button

- Keep this flow prominent — it is a core feature

6) Imports

- Upload zone for XLSX

- Import batch history table: file name, status (pending/processing/completed/partial/failed), rows success/error, timestamp

- Simple instructions for sheet names: Clients, Meetings, Campaigns

7) Settings (lightweight)

- Team members placeholder

- Integration cards: Cal.com (connected), Read AI (connected), Google Calendar (connected), Gemini metrics (connected) — status pills only, no real OAuth UI required

UX DETAILS

- Consistent page header: title, short subtitle, primary CTA on the right

- Tables: sortable headers, pagination or “load more”, row hover, sticky header

- Modals for create/edit client, meeting, and screenshot extraction

- Toasts for success/error

- Accessible contrast, focus rings in teal

- No lorem ipsum — use realistic PR content

COMPONENT QUALITY

- Reusable: Button, Input, Select, Badge, Card, Table, Tabs, Modal, EmptyState, Skeleton, StatCard, FileUpload

- Sidebar collapsible

- Responsive padding and max-width content area

OUT OF SCOPE FOR THIS UI PASS

- Do not implement real Supabase calls yet; use clean typed mock data modules so a developer can swap in API later

- Do not use purple/indigo AI gradients

- Do not make it look like ChatGPT / Linear-clone purple SaaS

DELIVERABLE

A complete multi-page app shell with all screens above, polished visual design using the teal + coral + warm paper palette, ready to export as React + TypeScript components into an existing Vite project.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/dd6f426e-2daa-492f-a385-d3cb13f4ef20).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
