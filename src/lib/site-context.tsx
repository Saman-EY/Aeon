import { createContext, useContext } from 'react'
import { getCopy, getInitiatives, getPrinciples, type Language } from '../data/localized'
import { getArticles } from '../data/articles'
import { localizedPath, type SiteRoute } from './routes'
import { siteConfig } from './config'

export function createSiteContext(route: SiteRoute) {
  return {
    ...route,
    s: getCopy(route.lang),
    initiatives: getInitiatives(route.lang),
    articles: getArticles(route.lang),
    principles: getPrinciples(route.lang),
    href: (path: string) => localizedPath(route.lang, path),
    ...siteConfig,
  }
}
export const SiteContext = createContext<ReturnType<typeof createSiteContext> | null>(null)
export function useSite() {
  const context = useContext(SiteContext)
  if (!context) throw new Error('Site components must be used inside SiteContext')
  return context
}
export type { Language }
