import { createServer } from 'vite'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'

// Optional build-time rendering only: production needs no Node server or worker.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { renderPage, urls, origin } = await server.ssrLoadModule('/src/prerender.tsx')
  const template = await readFile('dist/index.html', 'utf8')
  const seoPattern = /<!--seo-start-->[\s\S]*?<!--seo-end-->/
  if (!seoPattern.test(template) || !template.includes('<!--app-html-->'))
    throw new Error('HTML template markers are missing')
  const document = (url, hydrate = true) => {
    const page = renderPage(url)
    return template
      .replace('<html lang="en" dir="ltr">', `<html lang="${page.lang}" dir="${page.dir}">`)
      .replace(seoPattern, `<!--seo-start-->${page.head}<!--seo-end-->`)
      .replace('<div id="root">', `<div id="root"${hydrate ? ` data-prerendered="${url}"` : ''}>`)
      .replace('<!--app-html-->', page.html)
  }
  for (const url of urls) {
    const filename = path.join(
      'dist',
      url.endsWith('/') ? `${url.slice(1)}index.html` : `${url.slice(1)}.html`,
    )
    await mkdir(path.dirname(filename), { recursive: true })
    await writeFile(filename, document(url))
  }
  await writeFile('dist/404.html', document('/en/not-found', false))
  for (const lang of ['en', 'tr', 'fa', 'it'])
    await writeFile(`dist/${lang}/404.html`, document(`/${lang}/not-found`, false))
  const xmlEscape = (value) =>
    value
      .replaceAll('&', '&amp;')
      .replaceAll('"', '&quot;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
  const sitemap = urls
    .map((url) => {
      const routePath = url.slice(3)
      const alternatives = ['en', 'tr', 'fa', 'it', 'x-default']
        .map(
          (lang) =>
            `<xhtml:link rel="alternate" hreflang="${lang}" href="${xmlEscape(`${origin}/${lang === 'x-default' ? 'en' : lang}${routePath}`)}"/>`,
        )
        .join('')
      return `<url><loc>${xmlEscape(origin + url)}</loc>${alternatives}</url>`
    })
    .join('\n')
  await writeFile(
    'dist/sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${sitemap}</urlset>`,
  )
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`)
  console.log(`Pre-rendered ${urls.length} localized pages into dist/`)
} finally {
  await server.close()
}
