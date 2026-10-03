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
        <section class="section" style="padding-top:calc(84px + clamp(40px,7vw,88px)); padding-bottom:clamp(32px,5vw,56px);">
          <div class="container">
            <div class="grid-12">
              <div style="grid-column: 1 / span 8;" data-reveal>
                <span class="eyebrow">Insights</span>
                <h1 class="type-h1 balance" style="margin-top:24px;">
                  Institutional perspective, published deliberately.
                </h1>
                <p class="type-body-lg" style="margin-top:24px; max-width:56ch;">
                  Commentary from inside the ecosystem — on markets, risk, decision
                  science, and the infrastructure that holds institutional judgment
                  together.
                </p>
              </div>
            </div>

            <div style="margin-top:44px; display:flex; gap:10px; flex-wrap:wrap;" data-reveal>
              <span class="tag">All</span>
              {insightCategories.map((c) => (
                <span class="tag tag--neutral">{c}</span>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        <section class="section">
          <div class="container">
            {insights.map((post, i) => (
              <a href={`/insights/${post.slug}`} class="insight-card" data-reveal style={`--i:${i};`}>
                <div class="insight-card__row">
                  <span class="insight-card__num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <span class="tag tag--neutral" style="margin-bottom:12px;">{post.category}</span>
                    <h2 class="insight-card__title balance">{post.title}</h2>
                    <p class="type-body insight-card__excerpt">{post.excerpt}</p>
                  </div>
                  <div class="insight-card__meta">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
