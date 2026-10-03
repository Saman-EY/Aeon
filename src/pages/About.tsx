import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Seo } from '../components/Seo'
import { Btn, Rule } from '../components/UI'
import { aboutPrinciples } from '../data/content'

export function About() {
  return (
    <>
      <Seo
        title="About"
        path="/about"
        description="AEON exists to build the systems behind better financial decisions — selective, systematic, and built for a multi-decade horizon."
      />
      <Nav active="/about" />

      <main id="main">
        <section className="section" style={{ paddingTop: 'calc(84px + clamp(40px,7vw,88px))', paddingBottom: 'clamp(48px,6vw,72px)' }}>
          <div className="container">
            <div className="grid-12">
              <div style={{ gridColumn: '1 / span 12' }} data-reveal>
                <span className="eyebrow">About AEON</span>
                <h1 className="type-h1 balance" style={{ marginTop: '24px', maxWidth: '20ch' }}>
                  An institution built for the long term, from the first decision onward.
                </h1>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        <section className="section">
          <div className="container">
            <div className="grid-12">
              <div style={{ gridColumn: '1 / span 4' }} data-reveal>
                <span className="eyebrow">Why AEON exists</span>
              </div>
              <div style={{ gridColumn: '5 / span 8' }} data-reveal>
                <p className="type-h3 pretty" style={{ fontWeight: '460', color: 'var(--c-ink-dim)' }}>
                  Most financial institutions are built around the availability of
                  capital: raise it, deploy it, report on it. AEON is built around
                  the decision that precedes deployment — because that decision,
                  more than the capital itself, determines the outcome.
                </p>
                <p className="type-body-lg pretty" style={{ marginTop: '28px', maxWidth: '62ch' }}>
                  We are a holding company, not a fund and not a single product.
                  That structure is deliberate: it lets each part of the ecosystem
                  specialize — in decision intelligence, in risk, in protection —
                  while operating under one philosophy and one long-term mandate.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        {/* Operating principles */}
        <section className="section">
          <div className="container">
            <div className="grid-12" data-reveal>
              <div style={{ gridColumn: '1 / span 12' }}>
                <span className="eyebrow">How AEON operates</span>
              </div>
            </div>
            <div style={{ marginTop: '16px' }}>
              {aboutPrinciples.map((p, i) => (
                <div key={p.index} className="grid-12" style={{ paddingBlock: 'clamp(36px,5vw,56px)', ...(i > 0 ? { borderTop: '1px solid var(--c-line)' } : {}) }} data-reveal>
                  <div style={{ gridColumn: '1 / span 2' }}>
                    <span className="type-mono text-signal">{p.index}</span>
                  </div>
                  <div style={{ gridColumn: '3 / span 3' }}>
                    <h3 className="type-h3 balance">{p.title}</h3>
                  </div>
                  <div style={{ gridColumn: '7 / span 6' }}>
                    <p className="type-body-lg">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* What kind of institution */}
        <section className="section">
          <div className="container">
            <div className="grid-12">
              <div style={{ gridColumn: '1 / span 12', textAlign: 'center' }} data-reveal>
                <p className="eyebrow" style={{ justifyContent: 'center', marginBottom: '28px' }}>What we are becoming</p>
                <h2 className="type-h1 balance" style={{ maxWidth: '22ch', marginInline: 'auto' }}>
                  A quietly durable institution — measured in decades, not funding rounds.
                </h2>
                <p className="type-body-lg" style={{ marginTop: '28px', maxWidth: '56ch', marginInline: 'auto' }}>
                  AEON does not measure progress by announcements. It measures
                  progress by how much better the decisions running through its
                  ecosystem become — and how well they hold up under conditions
                  nobody planned for.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        <section className="section" style={{ paddingBlock: 'clamp(72px,10vw,120px)' }}>
          <div className="container">
            <div className="grid-12">
              <div style={{ gridColumn: '1 / span 12', textAlign: 'center' }} data-reveal>
                <h2 className="type-h1 balance" style={{ maxWidth: '18ch', marginInline: 'auto' }}>
                  Begin a conversation with AEON.
                </h2>
                <div style={{ marginTop: '36px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Btn href="/contact" variant="primary">Contact</Btn>
                  <Btn href="/ecosystem" variant="ghost" arrow={false}>Explore the ecosystem</Btn>
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
