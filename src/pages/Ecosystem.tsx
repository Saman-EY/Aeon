import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Seo } from '../components/Seo'
import { Btn, Rule, Tag } from '../components/UI'
import { EcosystemDiagram } from '../components/EcosystemDiagram'
import { ecosystem } from '../data/content'

export function Ecosystem() {
  return (
    <>
      <Seo
        title="Ecosystem"
        path="/ecosystem"
        description="AEON's ecosystem: decision intelligence, risk, protection, and financial infrastructure operating as one architecture."
      />
      <Nav active="/ecosystem" />

      <main id="main">
        <section className="section" style={{ paddingTop: 'calc(84px + clamp(40px,7vw,88px))', paddingBottom: 'clamp(48px,6vw,72px)' }}>
          <div className="container">
            <div className="grid-12">
              <div style={{ gridColumn: '1 / span 12' }} data-reveal>
                <span className="eyebrow">The Ecosystem</span>
                <h1 className="type-h1 balance" style={{ marginTop: '24px', maxWidth: '18ch' }}>
                  Not a portfolio of ventures. One architecture.
                </h1>
                <p className="type-body-lg pretty" style={{ marginTop: '28px', maxWidth: '60ch' }}>
                  Every entity inside AEON exists to solve one part of the same
                  problem — how capital moves from information, to decision, to
                  protected outcome. Read individually, they are companies.
                  Read together, they are a system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        {/* Diagram */}
        <section className="section">
          <div className="container">
            <div className="grid-12">
              <div style={{ gridColumn: '1 / span 4' }} data-reveal>
                <span className="eyebrow">Structure</span>
                <h2 className="type-h2" style={{ marginTop: '20px' }}>AEON → Decision → Risk → Protection → Infrastructure</h2>
                <p className="type-body" style={{ marginTop: '20px' }}>
                  Select a node to read how each layer functions and where it sits
                  in the flow of a capital decision.
                </p>
              </div>
              <div style={{ gridColumn: '6 / span 7' }} data-reveal>
                <EcosystemDiagram />
              </div>
            </div>
          </div>
        </section>

        <Rule />

        {/* Detailed entity list */}
        <section className="section">
          <div className="container">
            {ecosystem.map((node, i) => (
              <div key={node.id} id={node.id} className="grid-12" style={{ paddingBlock: 'clamp(48px,6vw,80px)', ...(i > 0 ? { borderTop: '1px solid var(--c-line)' } : {}) }} data-reveal>
                <div style={{ gridColumn: '1 / span 3' }}>
                  <span className="type-mono text-signal" style={{ fontSize: '0.85rem' }}>{node.index}</span>
                  <p className="type-caption" style={{ marginTop: '14px' }}>{node.layer}</p>
                </div>
                <div style={{ gridColumn: '4 / span 5' }}>
                  <h3 className="type-h2" style={{ marginBottom: '20px' }}>{node.name}</h3>
                  <p className="type-body-lg">{node.description}</p>
                </div>
                <div style={{ gridColumn: '10 / span 3' }}>
                  <p className="type-caption" style={{ marginBottom: '16px' }}>Focus areas</p>
                  <ul role="list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {node.domains.map((d) => (
                      <li key={d} style={{ paddingBottom: '12px', borderBottom: '1px solid var(--c-line)' }} className="type-body">{d}</li>
                    ))}
                  </ul>
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
                  Interested in one layer of the ecosystem?
                </h2>
                <div style={{ marginTop: '36px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Btn href="/contact" variant="primary">Begin a conversation</Btn>
                  <Btn href="/thesis" variant="ghost" arrow={false}>Read the thesis</Btn>
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
