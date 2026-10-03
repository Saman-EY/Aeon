import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Seo } from '../components/Seo'
import { Rule } from '../components/UI'
import { insights, insightCategories } from '../data/content'

export function Insights() {
  return (
    <>
      <Seo
        title="Insights"
        path="/insights"
        description="Institutional perspective on markets, risk, decision science, financial infrastructure, technology, and strategy — from AEON."
      />
      <Nav active="/insights" />

      <main id="main">
        <section className="section" style={{ paddingTop: 'calc(84px + clamp(40px,7vw,88px))', paddingBottom: 'clamp(32px,5vw,56px)' }}>
          <div className="container">
            <div className="grid-12">
              <div style={{ gridColumn: '1 / span 8' }} data-reveal>
                <span className="eyebrow">Insights</span>
                <h1 className="type-h1 balance" style={{ marginTop: '24px' }}>
                  Institutional perspective, published deliberately.
                </h1>
                <p className="type-body-lg" style={{ marginTop: '24px', maxWidth: '56ch' }}>
                  Commentary from inside the ecosystem — on markets, risk, decision
                  science, and the infrastructure that holds institutional judgment
                  together.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '44px', display: 'flex', gap: '10px', flexWrap: 'wrap' }} data-reveal>
              <span className="tag">All</span>
              {insightCategories.map((c) => (
                <span key={c} className="tag tag--neutral">{c}</span>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        <section className="section">
          <div className="container">
            {insights.map((post, i) => (
              <Link key={post.slug} to={`/insights/${post.slug}`} className="insight-card" data-reveal style={{ '--i': i } as CSSProperties}>
                <div className="insight-card__row">
                  <span className="insight-card__num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <span className="tag tag--neutral" style={{ marginBottom: '12px' }}>{post.category}</span>
                    <h2 className="insight-card__title balance">{post.title}</h2>
                    <p className="type-body insight-card__excerpt">{post.excerpt}</p>
                  </div>
                  <div className="insight-card__meta">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
