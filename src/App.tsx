import { useEffect } from 'react'
import { Navigate, useLocation, useNavigationType } from 'react-router'
import { SiteContext, createSiteContext } from './lib/site-context'
import { getPreferredLanguage, rememberLanguage, resolveRoute } from './lib/routes'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Seo from './components/Seo'
import HomePage from './pages/HomePage'
import EcosystemPage from './pages/EcosystemPage'
import InitiativePage from './pages/InitiativePage'
import ThesisPage from './pages/ThesisPage'
import AboutPage from './pages/AboutPage'
import InsightsPage from './pages/InsightsPage'
import ArticlePage from './pages/ArticlePage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import NotFoundPage from './pages/NotFoundPage'

function RouteEffects({ lang }: { lang: ReturnType<typeof resolveRoute>['lang'] }) {
  const location = useLocation()
  const navigationType = useNavigationType()
  useEffect(() => rememberLanguage(lang), [lang])
  useEffect(() => {
    if (location.hash) {
      let id: string
      try {
        id = decodeURIComponent(location.hash.slice(1))
      } catch {
        return
      }
      document.getElementById(id)?.scrollIntoView()
    } else if (navigationType !== 'POP') {
      window.scrollTo(0, 0)
      document.getElementById('main')?.focus({ preventScroll: true })
    }
  }, [location.pathname, location.hash, location.key, navigationType])
  return null
}

export default function App() {
  const location = useLocation()
  const route = resolveRoute(location.pathname, getPreferredLanguage())
  if (route.redirect)
    return <Navigate replace to={`${route.redirect}${location.search}${location.hash}`} />
  const site = createSiteContext(route)
  const page = route.notFound ? (
    <NotFoundPage />
  ) : route.path === '' ? (
    <HomePage />
  ) : route.path === '/ecosystem' ? (
    <EcosystemPage />
  ) : route.path.startsWith('/ecosystem/') ? (
    <InitiativePage />
  ) : route.path === '/thesis' ? (
    <ThesisPage />
  ) : route.path === '/about' ? (
    <AboutPage />
  ) : route.path === '/insights' ? (
    <InsightsPage />
  ) : route.path.startsWith('/insights/') ? (
    <ArticlePage />
  ) : route.path === '/contact' ? (
    <ContactPage key={route.lang} />
  ) : (
    <PrivacyPage />
  )
  return (
    <SiteContext.Provider value={site}>
      <Seo />
      <RouteEffects lang={route.lang} />
      <a href="#main" className="skip-link">
        {site.s.skip}
      </a>
      <Navigation />
      <main id="main" tabIndex={-1}>
        {page}
      </main>
      <Footer />
    </SiteContext.Provider>
  )
}
