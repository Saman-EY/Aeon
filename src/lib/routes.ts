import { getArticles } from '../data/articles'
import { isLanguage, type Language } from '../data/localized'

export const navPaths = ['/ecosystem', '/thesis', '/insights', '/about', '/contact']
export const contentPaths = [
  '',
  ...navPaths,
  '/privacy',
  ...['axis', 'aegis', 'arca', 'axon'].map((id) => `/ecosystem/${id}`),
  ...getArticles('en').map((article) => `/insights/${article.slug}`),
]
export const localizedPath = (language: Language, path = '') => `/${language}${path || '/'}`
export type SiteRoute = { lang: Language; path: string; notFound: boolean; redirect?: string }

export function resolveRoute(pathname: string, preferred: Language = 'en'): SiteRoute {
  const normalized = pathname.replace(/\/+$/, '') || '/'
  const first = normalized.split('/')[1]
  if (isLanguage(first)) {
    const path = normalized.slice(first.length + 1)
    const notFound = !contentPaths.includes(path)
    const canonical = localizedPath(first, path)
    return {
      lang: first,
      path,
      notFound,
      redirect: !notFound && canonical !== pathname ? canonical : undefined,
    }
  }
  const path = normalized === '/' ? '' : normalized
  const notFound = !contentPaths.includes(path)
  return {
    lang: preferred,
    path,
    notFound,
    redirect: notFound ? undefined : localizedPath(preferred, path),
  }
}

export function getPreferredLanguage(): Language {
  if (typeof window === 'undefined') return 'en'
  try {
    const stored = localStorage.getItem('aeon_language')
    if (stored && isLanguage(stored)) return stored
  } catch {
    /* Routing works when storage is blocked. */
  }
  const browser = navigator.language.split('-')[0]
  return isLanguage(browser) ? browser : 'en'
}

export function rememberLanguage(lang: Language) {
  try {
    localStorage.setItem('aeon_language', lang)
  } catch {
    /* Preference is optional. */
  }
}
