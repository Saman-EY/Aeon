import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { useSite } from '../lib/site-context'
import { readingMinutes } from '../data/articles'

export function Button({
  to,
  children,
  primary = false,
}: {
  to: string
  children: ReactNode
  primary?: boolean
}) {
  const { href } = useSite()
  return (
    <Link to={href(to)} className={`btn ${primary ? 'btn--primary' : 'btn--ghost'}`}>
      {children}
    </Link>
  )
}

export function Hero({
  label,
  heading,
  intro,
}: {
  label: string
  heading: string
  intro?: string
}) {
  return (
    <section className="page-intro container">
      <p className="eyebrow">{label}</p>
      <h1 className="type-h1 balance">{heading}</h1>
      {intro && <p className="type-body-lg intro-copy">{intro}</p>}
    </section>
  )
}

export function InitiativeCards() {
  const { s, initiatives, href } = useSite()
  return (
    <div className="initiative-grid">
      {initiatives.map((item, index) => (
        <Link key={item.id} className="initiative-card" to={href(`/ecosystem/${item.id}`)}>
          <div className="card-top">
            <span className="type-mono">{String(index + 1).padStart(2, '0')}</span>
            <span className="stage-label">{s.initiative}</span>
          </div>
          <h3 dir="ltr">{item.name}</h3>
          <p className="initiative-role">{item.role}</p>
          <p className="type-body">{item.summary}</p>
          <span className="card-action">{s.detail}</span>
        </Link>
      ))}
    </div>
  )
}

export function PostList({ limit = 6 }: { limit?: number }) {
  const { articles, href, s } = useSite()
  return (
    <div>
      {articles.slice(0, limit).map((article) => (
        <Link key={article.slug} to={href(`/insights/${article.slug}`)} className="editorial-row">
          <div>
            <span className="tag tag--neutral">{article.category}</span>
            <h3>{article.title}</h3>
            <p className="type-body">{article.excerpt}</p>
          </div>
          <span className="type-caption">
            {readingMinutes(article.body)} {s.minute}
          </span>
        </Link>
      ))}
    </div>
  )
}

export function ContactCTA() {
  const { s } = useSite()
  return (
    <section className="section section--border-t">
      <div className="container end-section">
        <h2 className="type-h2">{s.contactTitle}</h2>
        <Button to="/contact" primary>
          {s.conversation}
        </Button>
      </div>
    </section>
  )
}
