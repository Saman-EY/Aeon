import { site } from '../data/content'

type SeoProps = {
  title: string
  description?: string
  path?: string
  ogImage?: string
}

export function pageTitle(title?: string) {
  if (!title) return `${site.name} — Decision Intelligence, Risk & Protection Infrastructure`
  return `${title} — ${site.name}`
}

export function Seo({ title, description = site.description, path = '/', ogImage = '/static/og.jpg' }: SeoProps) {
  const fullTitle = pageTitle(title)
  const url = `${site.url}${path}`
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="theme-color" content={site.themeColor} />
      <meta name="color-scheme" content="dark" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${site.url}${ogImage}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${site.url}${ogImage}`} />
    </>
  )
}
