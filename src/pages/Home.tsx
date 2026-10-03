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
        <section class="section" style="padding-top:calc(84px + clamp(48px,9vw,120px)); padding-bottom:clamp(56px,8vw,96px); position:relative;">
          <div class="container">
            <div class="grid-12">
              <div style="grid-column: 1 / span 12;">
                <div data-reveal style="margin-bottom:28px;">
                  <span class="eyebrow">AEON — Financial &amp; Technology Holding Company</span>
                </div>

                <h1 class="type-display balance" style="max-width:15ch;">
                  <span data-reveal="mask" style="display:block;"><span>Building the architecture</span></span>
                  <span data-reveal="mask" style="display:block;"><span>behind <em style="font-style:italic; color:var(--c-signal);">better</em></span></span>
                  <span data-reveal="mask" style="display:block;"><span>financial decisions.</span></span>
                </h1>

                <div class="grid-12" style="margin-top:clamp(40px,5vw,72px);">
                  <div style="grid-column: 1 / span 5;" data-reveal>
                    <p class="type-body-lg pretty" style="max-width:44ch;">
                      AEON designs decision intelligence, risk, and protection
                      infrastructure for institutions and individuals who treat
                      capital allocation as a discipline — not a bet.
                    </p>
                    <div style="margin-top:36px; display:flex; gap:16px; flex-wrap:wrap;">
                      <Btn href="/ecosystem" variant="primary">Enter the ecosystem</Btn>
                      <Btn href="/thesis" variant="ghost" arrow={false}>Read the thesis</Btn>
                    </div>
                  </div>
                  <div style="grid-column: 8 / span 5;" class="hairline-x" data-reveal>
                    <div style="padding-left:32px;">
                      <p class="type-caption" style="margin-bottom:16px;">Ecosystem Layers</p>
                      <ul role="list">
                        {ecosystem.map((e, i) => (
                          <li style={`display:flex; gap:14px; padding-block:11px; ${i>0 ? 'border-top:1px solid var(--c-line);' : ''}`}>
                            <span class="type-mono text-faint" style="font-size:0.78rem;">{e.index}</span>
                            <span class="type-body" style="color:var(--c-ink);">{e.name}</span>
                            <span class="type-mono text-faint" style="margin-left:auto; font-size:0.7rem; letter-spacing:0.06em;">{e.layer.toUpperCase()}</span>
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
          <svg aria-hidden="true" style="position:absolute; top:0; right:-6%; width:52%; height:100%; opacity:0.5; pointer-events:none; z-index:-1;" viewBox="0 0 600 700" preserveAspectRatio="xMidYMid slice">
            <line x1="0" y1="120" x2="600" y2="120" stroke="var(--c-line)" stroke-width="1" />
            <line x1="480" y1="0" x2="480" y2="700" stroke="var(--c-line)" stroke-width="1" />
            <circle cx="480" cy="120" r="5" fill="none" stroke="var(--c-signal-dim)" stroke-width="1.2" />
            <line x1="0" y1="420" x2="600" y2="420" stroke="var(--c-line)" stroke-width="1" />
            <circle cx="140" cy="420" r="5" fill="none" stroke="var(--c-line-strong)" stroke-width="1.2" />
          </svg>
        </section>

        <Rule />

        {/* ================= INTRODUCTION ================= */}
        <section class="section">
          <div class="container">
            <div class="grid-12">
              <div style="grid-column: 1 / span 4;" data-reveal>
                <span class="eyebrow">What AEON is</span>
              </div>
              <div style="grid-column: 5 / span 8;" data-reveal>
                <p class="type-h3 pretty" style="font-weight:460; color:var(--c-ink-dim);">
                  AEON is not a fund, and it is not a fintech product. It is a holding
                  company that builds the systems institutions and individuals use to
                  decide what to do with capital — before, during, and after the decision
                  is made.
                </p>
                <p class="type-body-lg pretty" style="margin-top:28px; max-width:62ch;">
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
        <section class="section" style="padding-block:clamp(96px,16vw,220px);" id="philosophy">
          <div class="container">
            <div class="grid-12">
              <div style="grid-column: 1 / span 12; text-align:center;" data-reveal>
                <span class="eyebrow" style="justify-content:center; margin-bottom:36px;">The Central Thesis</span>
              </div>
            </div>
            <div class="grid-12">
              <div style="grid-column: 2 / span 10; text-align:center;" data-reveal>
                <p class="type-display balance" style="font-size:clamp(1.9rem, 1.3rem + 3.6vw, 4.6rem); line-height:1.08;">
                  “The quality of a decision matters
                  more than the mere <span class="text-signal">availability of capital.</span>”
                </p>
              </div>
            </div>
            <div class="grid-12" style="margin-top:56px;">
              <div style="grid-column: 4 / span 6; text-align:center;" data-reveal>
                <p class="type-body" style="max-width:56ch; margin-inline:auto;">
                  This is the operating premise behind everything AEON builds. Capital
                  is no longer the scarce resource. Judgment is.
                </p>
                <div style="margin-top:32px;">
                  <Btn href="/thesis" variant="text" arrow={true}>Read the full thesis</Btn>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        {/* ================= ECOSYSTEM PREVIEW ================= */}
        <section class="section">
          <div class="container">
            <SectionHeader
              eyebrow="The Ecosystem"
              title="One architecture. Four layers."
              lead="AEON's entities are not independent startups — they are functional layers of a single system, each addressing a different stage of how capital decisions are made, protected, and executed."
            />

            <div class="grid-12" style="margin-top:clamp(48px,6vw,80px);" data-reveal-group>
              {ecosystem.map((node, i) => (
                <div
                  class="edge-card"
                  style={`grid-column: span 3; --i:${i};`}
                  data-reveal
                >
                  <span class="edge-card__index">{node.index}</span>
                  <Tag>{node.layer}</Tag>
                  <h3 class="type-h3" style="margin-top:20px; margin-bottom:14px;">{node.name}</h3>
                  <p class="type-body">{node.summary}</p>
                </div>
              ))}
            </div>

            <div style="margin-top:48px;" data-reveal>
              <Btn href="/ecosystem" variant="ghost">Explore the full ecosystem architecture</Btn>
            </div>
          </div>
        </section>

        <Rule />

        {/* ================= CAPABILITIES ================= */}
        <section class="section">
          <div class="container">
            <SectionHeader
              eyebrow="Capabilities"
              title="What AEON builds"
              lead="Concrete systems, not abstractions — engineered for the discipline capital allocation requires."
            />
            <div class="grid-12" style="margin-top:clamp(48px,6vw,72px); row-gap:48px;" data-reveal-group>
              {capabilities.map((cap, i) => (
                <div style={`grid-column: span 4; --i:${i};`} data-reveal>
                  <div class="metric-block">
                    <span class="type-mono text-signal" style="font-size:0.78rem;">{cap.index}</span>
                    <h3 class="type-h3" style="margin-top:14px; margin-bottom:12px;">{cap.title}</h3>
                    <p class="type-body">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* ================= INSIGHTS PREVIEW ================= */}
        <section class="section">
          <div class="container">
            <div class="grid-12" data-reveal>
              <div style="grid-column: 1 / span 7;">
                <span class="eyebrow">Insights</span>
                <h2 class="type-h2 balance" style="margin-top:20px;">Institutional perspective, published deliberately.</h2>
              </div>
              <div style="grid-column: 9 / span 4; align-self:end;">
                <Btn href="/insights" variant="text">View all insights</Btn>
              </div>
            </div>

            <div style="margin-top:48px;">
              {insights.slice(0, 3).map((post, i) => (
                <a href={`/insights/${post.slug}`} class="insight-card" data-reveal style={`--i:${i};`}>
                  <div class="insight-card__row">
                    <span class="insight-card__num">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <span class="tag tag--neutral" style="margin-bottom:12px;">{post.category}</span>
                      <h3 class="insight-card__title balance">{post.title}</h3>
                      <p class="type-body insight-card__excerpt">{post.excerpt}</p>
                    </div>
                    <div class="insight-card__meta">
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* ================= FINAL CTA ================= */}
        <section class="section" style="padding-block:clamp(96px,14vw,180px);">
          <div class="container">
            <div class="grid-12">
              <div style="grid-column: 1 / span 12; text-align:center;" data-reveal>
                <h2 class="type-display balance" style="max-width:20ch; margin-inline:auto;">
                  Enter the <span class="text-signal">AEON</span> ecosystem.
                </h2>
                <p class="type-body-lg" style="margin-top:24px; max-width:52ch; margin-inline:auto;">
                  If you are building something that depends on the quality of a
                  decision, we should talk.
                </p>
                <div style="margin-top:44px; display:flex; gap:16px; justify-content:center; flex-wrap:wrap;">
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
