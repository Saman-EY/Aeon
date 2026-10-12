import { languages } from '../data/localized'
import { navPaths } from './routes'
import type { createSiteContext } from './site-context'

type HeadTag = {
  tag: 'title' | 'meta' | 'link'
  attributes?: Record<string, string>
  text?: string
}
export function getHeadTags(site: ReturnType<typeof createSiteContext>): HeadTag[] {
  const { lang, path, s, notFound, initiatives, articles, href, origin } = site
  const initiative = initiatives.find((item) => path === `/ecosystem/${item.id}`)
  const post = articles.find((item) => path === `/insights/${item.slug}`)
  const index = navPaths.indexOf(path)
  const title =
    (notFound
      ? s.notFound
      : initiative
        ? `${initiative.name} — ${initiative.role}`
        : post
          ? post.title
          : index >= 0
            ? s.nav[index]
            : path === '/privacy'
              ? s.privacy
              : s.hero) + ' — AEON'
  const description = initiative?.summary || post?.excerpt || s.description
  const url = origin + href(path)
  const meta = (name: string, content: string): HeadTag => ({
    tag: 'meta',
    attributes: { name, content },
  })
  const og = (property: string, content: string): HeadTag => ({
    tag: 'meta',
    attributes: { property, content },
  })
  return [
    { tag: 'title', text: title },
    meta('description', description),
    meta('robots', notFound ? 'noindex, follow' : 'index, follow'),
    ...(!notFound
      ? [
          { tag: 'link' as const, attributes: { rel: 'canonical', href: url } },
          ...languages.map((language) => ({
            tag: 'link' as const,
            attributes: {
              rel: 'alternate',
              hreflang: language,
              href: `${origin}/${language}${path || '/'}`,
            },
          })),
          {
            tag: 'link' as const,
            attributes: {
              rel: 'alternate',
              hreflang: 'x-default',
              href: `${origin}/en${path || '/'}`,
            },
          },
        ]
      : []),
    og('og:type', post ? 'article' : 'website'),
    og('og:site_name', 'AEON'),
    og('og:title', title),
    og('og:description', description),
    og('og:url', url),
    og('og:locale', { en: 'en_US', tr: 'tr_TR', fa: 'fa_IR', it: 'it_IT' }[lang]),
    og('og:image', `${origin}/static/og.jpg`),
    meta('twitter:card', 'summary_large_image'),
    meta('twitter:title', title),
    meta('twitter:description', description),
    meta('twitter:image', `${origin}/static/og.jpg`),
  ]
}
