# AEON — React + Vite

Standard React + TypeScript application, built with Vite. React Router manages navigation. English, Turkish, Persian and Italian content, the existing AEON design and all 68 localized routes are retained. Persian uses RTL layout.

## Run locally

Use Node.js 22.19+ or Node.js 24 LTS, with npm.

```sh
npm ci
npm run dev
```

Open the local address printed by Vite. To inspect the production build:

```sh
npm run build
npm run preview
```

`build` is the usual Vite SPA build. Its output is `dist/`. Configure the host to serve `index.html` for application routes so refreshes and direct links work.

## Optional static pages for search and social previews

```sh
npm run build:prerender
npm run preview
```

This first runs the same Vite build, then adds ready HTML for all 68 localized pages, a sitemap, robots.txt and localized missing-page templates to `dist/`. The browser hydrates the HTML with React. Rendering happens only during the build; the deployed website needs no application server. The supplied `dist/` uses this option. Keep the whole folder, including its `assets/` directory.

The included `vercel.json` uses this build, enables clean HTML URLs and supplies a SPA fallback. Other hosts must serve existing static files first, resolve `/en/about` to `/en/about.html` (and directory home pages to `index.html`), then rewrite remaining application paths to the root `index.html`. For Nginx, the corresponding rule is `try_files $uri $uri.html $uri/ /index.html;`. Configure real HTTP 404 responses on the host if you need them; client routing alone cannot set the HTTP status. The default Vite development and preview servers return the SPA fallback for unknown routes. See [Vercel's configuration documentation](https://vercel.com/docs/project-configuration/vercel-json#cleanurls) for clean URL behavior.

## Public configuration

Copy `.env.example` to `.env.local`, edit it, then rebuild:

```dotenv
VITE_SITE_URL=https://aeon-st.vercel.app
VITE_CONTACT_EMAIL=
VITE_CONTACT_ENDPOINT=
```

`VITE_SITE_URL` sets the canonical origin and sitemap. All `VITE_` values are public and become part of the browser bundle. Never put API keys, credentials or database URLs in them.

The contact form is disabled until `VITE_CONTACT_ENDPOINT` is configured. There is no API, database or mail service bundled with this frontend. An optional direct email link appears when `VITE_CONTACT_EMAIL` is set.

## Contact service contract

The optional endpoint receives `POST` JSON:

```json
{
  "name": "Visitor",
  "email": "visitor@example.com",
  "organization": "Optional organization",
  "topic": "general",
  "purpose": "development",
  "message": "Inquiry text",
  "language": "en",
  "website": ""
}
```

It must return a successful HTTP status and JSON `{"ok":true}` **only after accepting/storing the inquiry**. Other responses and network failures show a localized failure message and preserve the fields. Requests time out after 15 seconds. An endpoint on another origin must allow the website's origin and the JSON POST/preflight through CORS. Validate field lengths and allowed values, handle the honeypot, and apply spam controls on that service. Finalize retention/deletion procedures and align the privacy copy with the chosen service before enabling public inquiries.

## Project structure

```text
index.html               Vite entry document
src/main.tsx             React entry point
src/App.tsx              Application and page routing
src/components/          Navigation, footer, metadata and shared UI
src/pages/               Individual page components
src/data/                Translations and editorial articles
src/lib/                 Routes, settings and contact-service integration
src/styles/              Existing design and responsive/RTL styles
public/static/           Brand favicon and social image
scripts/prerender.mjs    Optional build-time HTML export
tests/                   Rendering, routing and form checks
dist/                    Ready production output
```

Content URLs use `/en/`, `/tr/`, `/fa/`, `/it/`. Changing language keeps the current page, query string and hash. The language preference is stored locally. Root and recognized legacy URLs redirect in the browser to the saved language, then a supported browser language, otherwise English. Language-prefixed URLs always take precedence.

## Checks

```sh
npm run typecheck
npm run lint
npm test
```

The migration removes Hono, Wrangler, Cloudflare worker bindings, D1 migrations and server-specific deployment scripts. If an existing deployment has stored inquiries, migrate or preserve those separately; this package does not export database records.
