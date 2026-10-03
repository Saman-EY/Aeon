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
- **Pages** (Hono JSX, server-rendered):
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
- **API**: `POST /api/contact` validates input and persists inquiries to
  Cloudflare D1 (`inquiries` table); `/robots.txt` and `/sitemap.xml` are
  generated dynamically.
- **SEO**: per-page `<title>`, meta description, canonical URL, Open Graph +
  Twitter card metadata, generated OG image (`/static/og.jpg`), semantic
  heading hierarchy throughout.
- **Accessibility**: skip-link, visible focus states, `aria-live` form status,
  keyboard-operable ecosystem diagram nodes, reduced-motion support,
  sufficient contrast on the dark palette.
- **Motion/interaction** (`public/static/app.js`, vanilla JS, no framework):
  scroll-based nav state, mobile menu, scroll-progress bar, IntersectionObserver
  reveal animations, restrained custom cursor (desktop only), interactive
  ecosystem diagram node/detail switching, async contact form submission.
- **Data layer**: Cloudflare D1 (`webapp-production` binding `DB`), migration
  in `migrations/0001_initial_schema.sql`, applied locally.
- **Content** (`src/data/content.ts`): single source of truth for all copy —
  no fabricated clients, revenue, partnerships, or certifications; ecosystem,
  thesis, capabilities, about, and insights content all live here for easy
  editing.

## URLs
- **Local dev (sandbox)**: served on port 3000 via `wrangler pages dev` + PM2.
- **Production**: not yet deployed — see "Next Steps."

## Data Architecture
- **Model**: `inquiries` (id, name, email, organization, topic, message,
  created_at) — Cloudflare D1 / SQLite.
- **Storage service**: Cloudflare D1, binding `DB`, database name
  `webapp-production`.
- **Content model**: static TypeScript data module (`src/data/content.ts`)
  driving all pages — no CMS at this stage.

## User Guide
1. Visit `/` for the institutional narrative overview.
2. Visit `/ecosystem` and click/hover the diagram nodes to read about each
   entity (Axis, Sentinel, Aegis, Financial Infrastructure).
3. Visit `/thesis` for the full philosophical argument.
4. Visit `/insights` for editorial commentary, or open any article.
5. Visit `/contact` to submit an inquiry — it is validated and stored.

## Features Not Yet Implemented
- Production Cloudflare deployment (see below).
- CMS-backed Insights (currently static content in `content.ts`).
- Admin view of submitted inquiries (data is stored in D1 but has no UI).
- Automated screenshot/visual regression testing (Playwright install timed
  out in this sandbox session; manual `curl` route testing was used instead).

## Recommended Next Steps
1. **Deploy**: three deploy paths are available (Cloudflare via your own
   account/BYOK, Genspark-hosted Cloudflare, or a Genspark Design handoff —
   not applicable here). Confirm which path you want and it can be run in the
   next turn — deploy was intentionally not run yet since more than one path
   was available and this requires your choice per policy.
2. Do a final visual QA pass with real browser screenshots (device widths:
   390px, 768px, 1440px) once Playwright/Chromium can be installed without
   network timeout, to confirm pixel-level spacing/hierarchy.
3. Consider wiring `/insights` to a real content source if the editorial
   cadence will be ongoing.
4. Add a lightweight admin/export view for `inquiries` if the team wants to
   act on contact submissions directly from the site.

## Deployment
- **Platform**: Cloudflare Pages (Hono + Vite)
- **Status**: ❌ Not yet deployed (local dev verified working)
- **Tech Stack**: Hono (JSX SSR) + TypeScript + Vite + Cloudflare D1 + vanilla
  CSS/JS (no client framework, no CSS framework — custom design system)
- **Last Updated**: 2026-08-23
