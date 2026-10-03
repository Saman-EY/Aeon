import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Seo } from '../components/Seo'
import { Btn, Rule } from '../components/UI'
import { thesisMovements, thesisStatement } from '../data/content'

export function Thesis() {
  return (
    <>
      <Seo
        title="Thesis"
        path="/thesis"
        description="The quality of a decision matters more than the mere availability of capital — AEON's central operating thesis, in five movements."
      />
      <Nav active="/thesis" />

      <main id="main">
        <section className="section" style={{ paddingTop: 'calc(84px + clamp(40px,7vw,88px))', paddingBottom: 'clamp(24px,4vw,48px)' }}>
          <div className="container">
            <div className="grid-12">
              <div style={{ gridColumn: '1 / span 12' }} data-reveal>
                <span className="eyebrow">Thesis</span>
              </div>
            </div>
            <div className="grid-12" style={{ marginTop: '28px' }}>
              <div style={{ gridColumn: '1 / span 11' }} data-reveal>
                <h1 className="type-display balance" style={{ maxWidth: '19ch' }}>
                  {thesisStatement}
                </h1>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        <section className="section">
          <div className="container">
            <div className="grid-12">
              <div style={{ gridColumn: '1 / span 5' }} data-reveal>
                <p className="type-h3 pretty" style={{ fontWeight: '460', color: 'var(--c-ink-dim)' }}>
                  Access to capital has stopped being the differentiator it once was.
                  What remains scarce is the discipline to decide well — under
                  incomplete information, under time pressure, under risk that is
                  rarely priced correctly in the moment.
                </p>
              </div>
              <div style={{ gridColumn: '7 / span 6' }} data-reveal>
                <p className="type-body-lg">
                  This thesis is not a slogan. It is the design constraint behind
                  every system AEON builds. If a tool, a process, or an entity does
                  not improve the quality of a capital decision, it does not belong
                  in the ecosystem — regardless of how much capital it can move.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        {/* Thesis movements — editorial numbered list */}
        <section className="section">
          <div className="container">
            {thesisMovements.map((m, i) => (
              <div key={m.index} className="grid-12" style={{ paddingBlock: 'clamp(40px,5vw,64px)', ...(i > 0 ? { borderTop: '1px solid var(--c-line)' } : {}) }} data-reveal>
                <div style={{ gridColumn: '1 / span 2' }}>
                  <span className="type-mono text-signal" style={{ fontSize: '1.1rem' }}>{m.index}</span>
                </div>
                <div style={{ gridColumn: '3 / span 4' }}>
                  <h3 className="type-h3 balance">{m.title}</h3>
                </div>
                <div style={{ gridColumn: '8 / span 5' }}>
                  <p className="type-body-lg">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Rule />

        <section className="section" style={{ paddingBlock: 'clamp(72px,10vw,120px)' }}>
          <div className="container">
            <div className="grid-12">
              <div style={{ gridColumn: '1 / span 12', textAlign: 'center' }} data-reveal>
                <h2 className="type-h1 balance" style={{ maxWidth: '20ch', marginInline: 'auto' }}>
                  See the thesis expressed as an ecosystem.
                </h2>
                <div style={{ marginTop: '36px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Btn href="/ecosystem" variant="primary">Explore the ecosystem</Btn>
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
