import { Hono } from 'hono'
import { renderer } from './renderer'
import { Home } from './pages/Home'
import { Ecosystem } from './pages/Ecosystem'
import { Thesis } from './pages/Thesis'
import { About } from './pages/About'
import { Insights } from './pages/Insights'
import { InsightDetail } from './pages/InsightDetail'
import { Contact } from './pages/Contact'
import { getInsightBySlug } from './data/content'

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.use(renderer)

// ---------------------------------------------------------------------------
// Pages
// ---------------------------------------------------------------------------
app.get('/', (c) => c.render(<Home />))
app.get('/ecosystem', (c) => c.render(<Ecosystem />))
app.get('/thesis', (c) => c.render(<Thesis />))
app.get('/about', (c) => c.render(<About />))
app.get('/insights', (c) => c.render(<Insights />))
app.get('/contact', (c) => c.render(<Contact />))

app.get('/insights/:slug', (c) => {
  const slug = c.req.param('slug')
  const post = getInsightBySlug(slug)
  if (!post) return c.notFound()
  return c.render(<InsightDetail slug={slug} />)
})

// ---------------------------------------------------------------------------
// API — contact form submission (persisted to D1 when available)
// ---------------------------------------------------------------------------
app.post('/api/contact', async (c) => {
  let payload: Record<string, unknown>
  try {
    payload = await c.req.json()
  } catch {
    return c.json({ ok: false, error: 'Invalid request body.' }, 400)
  }

  const name = String(payload.name ?? '').trim()
  const email = String(payload.email ?? '').trim()
  const organization = String(payload.organization ?? '').trim()
  const topic = String(payload.topic ?? '').trim()
  const message = String(payload.message ?? '').trim()

  if (!name || !email || !message) {
    return c.json({ ok: false, error: 'Name, email, and message are required.' }, 400)
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    return c.json({ ok: false, error: 'Please provide a valid email address.' }, 400)
  }

  try {
    if (c.env && c.env.DB) {
      await c.env.DB.prepare(
        `INSERT INTO inquiries (name, email, organization, topic, message) VALUES (?, ?, ?, ?, ?)`
      )
        .bind(name, email, organization || null, topic || null, message)
        .run()
    }
  } catch (err) {
    // Do not fail the user-facing request over a persistence issue —
    // but surface it so the caller knows nothing was stored.
    return c.json({ ok: false, error: 'Unable to record inquiry at this time.' }, 500)
  }

  return c.json({ ok: true })
})

// ---------------------------------------------------------------------------
// SEO utilities
// ---------------------------------------------------------------------------
app.get('/robots.txt', (c) => {
  return c.text(`User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', c.req.url).toString()}\n`)
})

app.get('/sitemap.xml', (c) => {
  const base = new URL('/', c.req.url).toString().replace(/\/$/, '')
  const staticPaths = ['/', '/ecosystem', '/thesis', '/about', '/insights', '/contact']
  const urls = staticPaths
    .map((p) => `  <url><loc>${base}${p}</loc></url>`)
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`
  return c.body(xml, 200, { 'Content-Type': 'application/xml' })
})

export default app
