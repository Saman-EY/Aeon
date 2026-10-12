// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { renderPage, urls } from '../src/prerender'
import { contentPaths, resolveRoute } from '../src/lib/routes'

describe('Static React output', () => {
  it('keeps all 68 localized URLs', () => {
    expect(contentPaths).toHaveLength(17)
    expect(urls).toHaveLength(68)
    expect(new Set(urls).size).toBe(68)
  })
  for (const url of urls)
    it(`pre-renders content and metadata for ${url}`, () => {
      const page = renderPage(url)
      expect(page.html).toContain('<h1')
      expect(page.html).toContain('<main')
      expect(page.html).not.toContain('undefined')
      expect(page.head).toContain(`href="https://aeon-st.vercel.app${url}"`)
      expect(page.head.match(/hreflang=/g)).toHaveLength(5)
      expect(page.lang).toBe(url.slice(1, 3))
      expect(page.dir).toBe(page.lang === 'fa' ? 'rtl' : 'ltr')
      expect(page.head).not.toContain('noindex')
    })
  it('normalizes a trailing slash without losing the language', () => {
    expect(resolveRoute('/fa/about/').redirect).toBe('/fa/about')
    expect(resolveRoute('/tr').redirect).toBe('/tr/')
  })
  it('does not turn unknown initiative/article URLs into existing content', () => {
    expect(resolveRoute('/it/ecosystem/unknown').notFound).toBe(true)
    expect(resolveRoute('/en/insights/unknown').notFound).toBe(true)
  })
})
