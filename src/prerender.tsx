import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { createSiteContext } from './lib/site-context'
import { contentPaths, localizedPath, resolveRoute } from './lib/routes'
import { languages } from './data/localized'
import { getHeadTags } from './lib/metadata'
import { siteConfig } from './lib/config'

const escape = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!,
  )

export const urls = languages.flatMap((lang) =>
  contentPaths.map((path) => localizedPath(lang, path)),
)
export const origin = siteConfig.origin
export function renderPage(url: string) {
  const route = resolveRoute(url)
  const head = getHeadTags(createSiteContext(route))
    .map((item) => {
      const attributes = Object.entries(item.attributes || {})
        .map(([key, value]) => ` ${key}="${escape(value)}"`)
        .join('')
      return item.tag === 'title'
        ? `<title data-aeon-seo>${escape(item.text!)}</title>`
        : `<${item.tag} data-aeon-seo${attributes}>`
    })
    .join('\n')
  return {
    html: renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
    ),
    head,
    lang: route.lang,
    dir: route.lang === 'fa' ? 'rtl' : 'ltr',
  }
}
