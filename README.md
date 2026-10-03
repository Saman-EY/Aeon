# AEON — Financial & Technology Holding Company

## Project Overview
- **Name**: AEON
- **Goal**: An institutional digital headquarters for a financial & technology
  holding company, built around the thesis that *"the quality of a decision
  matters more than the mere availability of capital."*
- **Positioning**: Institutional + Premium Minimalism + Architectural
  Precision — deliberately distinct from generic fintech/SaaS/crypto/startup
  visual language.

## Currently Completed Features
- **Design system** (`public/static/style.css`): full token set (obsidian
  ground, single "Quantum Teal" signal color, fluid type scale, 12-col grid,
  spacing/motion tokens), reusable component classes (nav, buttons, cards,
  insight rows, ecosystem diagram, footer, form fields), scroll-reveal motion
  system with `prefers-reduced-motion` support.
- **Pages** (React 19 + React Router v7, client-rendered):
  - `/` — Home: hero narrative, institutional introduction, philosophy
    statement moment, ecosystem preview, capabilities grid, insights preview,
    final CTA.
  - `/ecosystem` — full ecosystem architecture with an interactive SVG node
    diagram (AEON → Decision Intelligence → Risk → Protection →
    Infrastructure) plus detailed entity write-ups (Axis, Sentinel, Aegis,
    Financial Infrastructure).
  - `/thesis` — the central thesis expanded into five editorial "movements."
  - `/about` — why AEON exists, operating principles, institutional framing.
  - `/insights` — editorial/research index with category tags.
  - `/insights/:slug` — full long-form article template with related-article
    footer.
  - `/contact` — contact form (client-validated + server-validated) wired to
    `/api/contact`.
- **Contact form**: client-validated and submitted (via `src/lib/interactions.ts`)
  to a configurable endpoint (`VITE_CONTACT_ENDPOINT`, default `/api/contact`).
  No server is bundled — point it at your own API or a form service.
- **SEO**: per-page `<title>`, meta description, canonical URL, Open Graph +
  Twitter card metadata, generated OG image (`/static/og.jpg`), semantic
  heading hierarchy throughout.
- **Accessibility**: skip-link, visible focus states, `aria-live` form status,
  keyboard-operable ecosystem diagram nodes, reduced-motion support,
  sufficient contrast on the dark palette.
- **Motion/interaction** (`src/lib/interactions.ts`, vanilla TS, no framework,
  re-armed after every client-side route change):
  scroll-based nav state, mobile menu, scroll-progress bar, IntersectionObserver
  reveal animations, restrained custom cursor (desktop only), interactive
  ecosystem diagram node/detail switching, async contact form submission.
- **Data layer**: none bundled — the former Cloudflare D1 (`inquiries`) storage
  was removed together with the Hono/Workers backend.
- **Content** (`src/data/content.ts`): single source of truth for all copy —
  no fabricated clients, revenue, partnerships, or certifications; ecosystem,
  thesis, capabilities, about, and insights content all live here for easy
  editing.

## URLs
- **Local dev**: `npm run dev` — Vite dev server on port 3000 (with HMR).
- **Preview**: `npm run preview` — serves the built `dist/` on port 3000.
- **Production**: not yet deployed — see "Next Steps."

## Data Architecture
- **Contact model**: previously `inquiries` (id, name, email, organization,
  topic, message, created_at) in Cloudflare D1 — removed with the server backend.
- **Content model**: static TypeScript data module (`src/data/content.ts`)
  driving all pages — no CMS at this stage.

## User Guide
1. Visit `/` for the institutional narrative overview.
2. Visit `/ecosystem` and click/hover the diagram nodes to read about each
   entity (Axis, Sentinel, Aegis, Financial Infrastructure).
3. Visit `/thesis` for the full philosophical argument.
4. Visit `/insights` for editorial commentary, or open any article.
5. Visit `/contact` to submit an inquiry — it is client-validated and posted to
   the configured endpoint.

## Features Not Yet Implemented
- Production deployment (static host — see below).
- CMS-backed Insights (currently static content in `content.ts`).
- Admin/export view of inquiries (requires wiring a backend to the form).
- Automated screenshot/visual regression testing (Playwright install timed
  out in this sandbox session; manual `curl` route testing was used instead).

## Recommended Next Steps
1. **Deploy**: run `npm run build` and publish `dist/` to any static host
   (configure an SPA fallback to `index.html`). No server or Cloudflare
   account is required.
2. Do a final visual QA pass with real browser screenshots (device widths:
   390px, 768px, 1440px) once Playwright/Chromium can be installed without
   network timeout, to confirm pixel-level spacing/hierarchy.
3. Consider wiring `/insights` to a real content source if the editorial
   cadence will be ongoing.
4. Add a lightweight admin/export view for `inquiries` if the team wants to
   act on contact submissions directly from the site.

## Deployment
- **Stack**: React 19 + React Router v7 + TypeScript + Vite (client-side SPA).
- **Build output**: `dist/` — deploy as a static site on any static host.
- **SPA fallback**: configure the host to rewrite unknown paths to
  `/index.html` so deep links (e.g. `/ecosystem`, `/insights/:slug`) resolve.
- **Environment**: `VITE_CONTACT_ENDPOINT` (optional) — contact form endpoint.
- **Status**: ✅ Builds cleanly (`npm run build`); not yet deployed.
