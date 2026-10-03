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
        <section class="section" style="padding-top:calc(84px + clamp(40px,7vw,88px)); padding-bottom:clamp(48px,6vw,72px);">
          <div class="container">
            <div class="grid-12">
              <div style="grid-column: 1 / span 12;" data-reveal>
                <span class="eyebrow">The Ecosystem</span>
                <h1 class="type-h1 balance" style="margin-top:24px; max-width:18ch;">
                  Not a portfolio of ventures. One architecture.
                </h1>
                <p class="type-body-lg pretty" style="margin-top:28px; max-width:60ch;">
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
        <section class="section">
          <div class="container">
            <div class="grid-12">
              <div style="grid-column: 1 / span 4;" data-reveal>
                <span class="eyebrow">Structure</span>
                <h2 class="type-h2" style="margin-top:20px;">AEON → Decision → Risk → Protection → Infrastructure</h2>
                <p class="type-body" style="margin-top:20px;">
                  Select a node to read how each layer functions and where it sits
                  in the flow of a capital decision.
                </p>
              </div>
              <div style="grid-column: 6 / span 7;" data-reveal>
                <EcosystemDiagram />
              </div>
            </div>
          </div>
        </section>

        <Rule />

        {/* Detailed entity list */}
        <section class="section">
          <div class="container">
            {ecosystem.map((node, i) => (
              <div id={node.id} class="grid-12" style={`padding-block:clamp(48px,6vw,80px); ${i > 0 ? 'border-top:1px solid var(--c-line);' : ''}`} data-reveal>
                <div style="grid-column: 1 / span 3;">
                  <span class="type-mono text-signal" style="font-size:0.85rem;">{node.index}</span>
                  <p class="type-caption" style="margin-top:14px;">{node.layer}</p>
                </div>
                <div style="grid-column: 4 / span 5;">
                  <h3 class="type-h2" style="margin-bottom:20px;">{node.name}</h3>
                  <p class="type-body-lg">{node.description}</p>
                </div>
                <div style="grid-column: 10 / span 3;">
                  <p class="type-caption" style="margin-bottom:16px;">Focus areas</p>
                  <ul role="list" style="display:flex; flex-direction:column; gap:12px;">
                    {node.domains.map((d) => (
                      <li style="padding-bottom:12px; border-bottom:1px solid var(--c-line);" class="type-body">{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Rule />

        <section class="section" style="padding-block:clamp(72px,10vw,120px);">
          <div class="container">
            <div class="grid-12">
              <div style="grid-column: 1 / span 12; text-align:center;" data-reveal>
                <h2 class="type-h1 balance" style="max-width:20ch; margin-inline:auto;">
                  Interested in one layer of the ecosystem?
                </h2>
                <div style="margin-top:36px; display:flex; gap:16px; justify-content:center; flex-wrap:wrap;">
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
