# PR Client & Campaign Tracker

## Goal
Build a polished desktop-first internal agency workspace using typed mock data, with cohesive navigation and complete screens for clients, meetings, transcripts, campaigns, imports, and settings.

## Experience
- Persistent collapsible left sidebar with the seven requested destinations.
- Top bar with global search, contextual date filtering, notifications, and user menu.
- Warm editorial palette: deep teal actions, restrained coral emphasis, paper-toned surfaces, ink typography, refined white cards, and accessible focus states.
- Dense, scannable tables at 1280–1440px with practical responsive behavior for smaller screens.
- Shared page headers, filters, status badges, tabs, dialogs, empty states, loading skeletons, file drop zones, and success/error toasts.

## Pages and flows
1. **Dashboard** — KPI cards, six-month meetings chart, campaign performance chart, recent activity, and four quick actions wired to relevant dialogs/pages.
2. **Clients** — searchable/filterable/sortable client table with pagination; create/edit dialog; dedicated client detail page with overview, contacts, meetings, proposal PDFs, notes, and tags.
3. **Meetings** — agenda/table view toggle, source and transcript badges, scheduling dialog, and a meeting detail dialog with attendees, notes, and transcript access.
4. **Transcripts** — transcript index plus dedicated transcript detail view with takeaways, action-item checklist, multi-part speaker timeline, and a clear unlinked/empty state.
5. **Campaigns** — campaign index plus dedicated detail page containing editable brief copy, channel metrics, and a prominent screenshot extraction workflow with upload, simulated processing, confidence, preview, and apply-to-table action.
6. **Imports** — XLSX drop zone, sheet guidance, simulated import feedback, and batch-history table with partial/failure states.
7. **Settings** — team placeholders and integration status cards for Cal.com, Read AI, Google Calendar, and Gemini metrics.

## Technical approach
- Keep TanStack Start’s React/TypeScript/Vite foundation and implement each destination as a proper typed route.
- Define the complete visual token system in `src/styles.css`; use semantic Tailwind classes throughout.
- Add reusable UI primitives and feature components, with typed mock records separated from presentation.
- Use Recharts for charts, Lucide for icons, Radix primitives for accessible dialogs/selects/menus, and Sonner for toasts.
- Keep all mutations local and demonstrative for this UI pass; no database, authentication, OAuth, or external API calls.
- Give every content route unique title, description, Open Graph, and Twitter metadata.

## Validation
- Verify route navigation and primary interactions in the running app.
- Check desktop layouts at 1440px and 1280px, plus a narrow viewport for basic usability.
- Confirm dialogs, filters, sorting, toggles, upload simulations, toasts, empty states, and chart rendering.
