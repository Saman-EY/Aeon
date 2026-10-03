import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Seo } from '../components/Seo'
import { SectionHeader, Btn, Rule, Tag } from '../components/UI'
import { ecosystem, capabilities, insights, thesisStatement } from '../data/content'

export function Home() {
  return (
    <>
      <Seo title="" path="/" />
      <Nav active="" />

      <main id="main">
        {/* ================= HERO ================= */}
        <section className="section" style={{ paddingTop: 'calc(84px + clamp(48px,9vw,120px))', paddingBottom: 'clamp(56px,8vw,96px)', position: 'relative' }}>
          <div className="container">
            <div className="grid-12">
              <div style={{ gridColumn: '1 / span 12' }}>
                <div data-reveal style={{ marginBottom: '28px' }}>
                  <span className="eyebrow">AEON — Financial &amp; Technology Holding Company</span>
                </div>

                <h1 className="type-display balance" style={{ maxWidth: '15ch' }}>
                  <span data-reveal="mask" style={{ display: 'block' }}><span>Building the architecture</span></span>
                  <span data-reveal="mask" style={{ display: 'block' }}><span>behind <em style={{ fontStyle: 'italic', color: 'var(--c-signal)' }}>better</em></span></span>
                  <span data-reveal="mask" style={{ display: 'block' }}><span>financial decisions.</span></span>
                </h1>

                <div className="grid-12" style={{ marginTop: 'clamp(40px,5vw,72px)' }}>
                  <div style={{ gridColumn: '1 / span 5' }} data-reveal>
                    <p className="type-body-lg pretty" style={{ maxWidth: '44ch' }}>
                      AEON designs decision intelligence, risk, and protection
                      infrastructure for institutions and individuals who treat
                      capital allocation as a discipline — not a bet.
                    </p>
                    <div style={{ marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                      <Btn href="/ecosystem" variant="primary">Enter the ecosystem</Btn>
                      <Btn href="/thesis" variant="ghost" arrow={false}>Read the thesis</Btn>
                    </div>
                  </div>
                  <div style={{ gridColumn: '8 / span 5' }} className="hairline-x" data-reveal>
                    <div style={{ paddingLeft: '32px' }}>
                      <p className="type-caption" style={{ marginBottom: '16px' }}>Ecosystem Layers</p>
                      <ul role="list">
                        {ecosystem.map((e, i) => (
                          <li
                            key={e.id}
                            style={{
                              display: 'flex',
                              gap: '14px',
                              paddingBlock: '11px',
                              ...(i > 0 ? { borderTop: '1px solid var(--c-line)' } : {}),
                            }}
                          >
                            <span className="type-mono text-faint" style={{ fontSize: '0.78rem' }}>{e.index}</span>
                            <span className="type-body" style={{ color: 'var(--c-ink)' }}>{e.name}</span>
                            <span className="type-mono text-faint" style={{ marginLeft: 'auto', fontSize: '0.7rem', letterSpacing: '0.06em' }}>{e.layer.toUpperCase()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* faint architectural backdrop line-art */}
          <svg aria-hidden="true" style={{ position: 'absolute', top: '0', right: '-6%', width: '52%', height: '100%', opacity: '0.5', pointerEvents: 'none', zIndex: '-1' }} viewBox="0 0 600 700" preserveAspectRatio="xMidYMid slice">
            <line x1="0" y1="120" x2="600" y2="120" stroke="var(--c-line)" strokeWidth="1" />
            <line x1="480" y1="0" x2="480" y2="700" stroke="var(--c-line)" strokeWidth="1" />
            <circle cx="480" cy="120" r="5" fill="none" stroke="var(--c-signal-dim)" strokeWidth="1.2" />
            <line x1="0" y1="420" x2="600" y2="420" stroke="var(--c-line)" strokeWidth="1" />
            <circle cx="140" cy="420" r="5" fill="none" stroke="var(--c-line-strong)" strokeWidth="1.2" />
          </svg>
        </section>

        <Rule />

        {/* ================= INTRODUCTION ================= */}
        <section className="section">
          <div className="container">
            <div className="grid-12">
              <div style={{ gridColumn: '1 / span 4' }} data-reveal>
                <span className="eyebrow">What AEON is</span>
              </div>
              <div style={{ gridColumn: '5 / span 8' }} data-reveal>
                <p className="type-h3 pretty" style={{ fontWeight: '460', color: 'var(--c-ink-dim)' }}>
                  AEON is not a fund, and it is not a fintech product. It is a holding
                  company that builds the systems institutions and individuals use to
                  decide what to do with capital — before, during, and after the decision
                  is made.
                </p>
                <p className="type-body-lg pretty" style={{ marginTop: '28px', maxWidth: '62ch' }}>
                  Each entity inside AEON addresses one part of that problem: structuring
                  a decision, understanding its risk, and protecting the capital committed
                  to it. Together they form a single architecture, not a portfolio of
                  unrelated ventures.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        {/* ================= PHILOSOPHY — the strongest visual moment ================= */}
        <section className="section" style={{ paddingBlock: 'clamp(96px,16vw,220px)' }} id="philosophy">
          <div className="container">
            <div className="grid-12">
              <div style={{ gridColumn: '1 / span 12', textAlign: 'center' }} data-reveal>
                <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: '36px' }}>The Central Thesis</span>
              </div>
            </div>
            <div className="grid-12">
              <div style={{ gridColumn: '2 / span 10', textAlign: 'center' }} data-reveal>
                <p className="type-display balance" style={{ fontSize: 'clamp(1.9rem, 1.3rem + 3.6vw, 4.6rem)', lineHeight: '1.08' }}>
                  “The quality of a decision matters
                  more than the mere <span className="text-signal">availability of capital.</span>”
                </p>
              </div>
            </div>
            <div className="grid-12" style={{ marginTop: '56px' }}>
              <div style={{ gridColumn: '4 / span 6', textAlign: 'center' }} data-reveal>
                <p className="type-body" style={{ maxWidth: '56ch', marginInline: 'auto' }}>
                  This is the operating premise behind everything AEON builds. Capital
                  is no longer the scarce resource. Judgment is.
                </p>
                <div style={{ marginTop: '32px' }}>
                  <Btn href="/thesis" variant="text" arrow={true}>Read the full thesis</Btn>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        {/* ================= ECOSYSTEM PREVIEW ================= */}
        <section className="section">
          <div className="container">
            <SectionHeader
              eyebrow="The Ecosystem"
              title="One architecture. Four layers."
              lead="AEON's entities are not independent startups — they are functional layers of a single system, each addressing a different stage of how capital decisions are made, protected, and executed."
            />

            <div className="grid-12" style={{ marginTop: 'clamp(48px,6vw,80px)' }} data-reveal-group>
              {ecosystem.map((node, i) => (
                <div
                  key={node.id}
                  className="edge-card"
                  style={{ '--i': i, gridColumn: 'span 3' } as CSSProperties}
                  data-reveal
                >
                  <span className="edge-card__index">{node.index}</span>
                  <Tag>{node.layer}</Tag>
                  <h3 className="type-h3" style={{ marginTop: '20px', marginBottom: '14px' }}>{node.name}</h3>
                  <p className="type-body">{node.summary}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '48px' }} data-reveal>
              <Btn href="/ecosystem" variant="ghost">Explore the full ecosystem architecture</Btn>
            </div>
          </div>
        </section>

        <Rule />

        {/* ================= CAPABILITIES ================= */}
        <section className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Capabilities"
              title="What AEON builds"
              lead="Concrete systems, not abstractions — engineered for the discipline capital allocation requires."
            />
            <div className="grid-12" style={{ marginTop: 'clamp(48px,6vw,72px)', rowGap: '48px' }} data-reveal-group>
              {capabilities.map((cap, i) => (
                <div key={cap.index} style={{ '--i': i, gridColumn: 'span 4' } as CSSProperties} data-reveal>
                  <div className="metric-block">
                    <span className="type-mono text-signal" style={{ fontSize: '0.78rem' }}>{cap.index}</span>
                    <h3 className="type-h3" style={{ marginTop: '14px', marginBottom: '12px' }}>{cap.title}</h3>
                    <p className="type-body">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* ================= INSIGHTS PREVIEW ================= */}
        <section className="section">
          <div className="container">
            <div className="grid-12" data-reveal>
              <div style={{ gridColumn: '1 / span 7' }}>
                <span className="eyebrow">Insights</span>
                <h2 className="type-h2 balance" style={{ marginTop: '20px' }}>Institutional perspective, published deliberately.</h2>
              </div>
              <div style={{ gridColumn: '9 / span 4', alignSelf: 'end' }}>
                <Btn href="/insights" variant="text">View all insights</Btn>
              </div>
            </div>

            <div style={{ marginTop: '48px' }}>
              {insights.slice(0, 3).map((post, i) => (
                <Link key={post.slug} to={`/insights/${post.slug}`} className="insight-card" data-reveal style={{ '--i': i } as CSSProperties}>
                  <div className="insight-card__row">
                    <span className="insight-card__num">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <span className="tag tag--neutral" style={{ marginBottom: '12px' }}>{post.category}</span>
                      <h3 className="insight-card__title balance">{post.title}</h3>
                      <p className="type-body insight-card__excerpt">{post.excerpt}</p>
                    </div>
                    <div className="insight-card__meta">
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* ================= FINAL CTA ================= */}
        <section className="section" style={{ paddingBlock: 'clamp(96px,14vw,180px)' }}>
          <div className="container">
            <div className="grid-12">
              <div style={{ gridColumn: '1 / span 12', textAlign: 'center' }} data-reveal>
                <h2 className="type-display balance" style={{ maxWidth: '20ch', marginInline: 'auto' }}>
                  Enter the <span className="text-signal">AEON</span> ecosystem.
                </h2>
                <p className="type-body-lg" style={{ marginTop: '24px', maxWidth: '52ch', marginInline: 'auto' }}>
                  If you are building something that depends on the quality of a
                  decision, we should talk.
                </p>
                <div style={{ marginTop: '44px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Btn href="/contact" variant="primary">Begin a conversation</Btn>
                  <Btn href="/about" variant="ghost" arrow={false}>About AEON</Btn>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
