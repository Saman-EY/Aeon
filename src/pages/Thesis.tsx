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
        <section class="section" style="padding-top:calc(84px + clamp(40px,7vw,88px)); padding-bottom:clamp(24px,4vw,48px);">
          <div class="container">
            <div class="grid-12">
              <div style="grid-column: 1 / span 12;" data-reveal>
                <span class="eyebrow">Thesis</span>
              </div>
            </div>
            <div class="grid-12" style="margin-top:28px;">
              <div style="grid-column: 1 / span 11;" data-reveal>
                <h1 class="type-display balance" style="max-width:19ch;">
                  {thesisStatement}
                </h1>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        <section class="section">
          <div class="container">
            <div class="grid-12">
              <div style="grid-column: 1 / span 5;" data-reveal>
                <p class="type-h3 pretty" style="font-weight:460; color:var(--c-ink-dim);">
                  Access to capital has stopped being the differentiator it once was.
                  What remains scarce is the discipline to decide well — under
                  incomplete information, under time pressure, under risk that is
                  rarely priced correctly in the moment.
                </p>
              </div>
              <div style="grid-column: 7 / span 6;" data-reveal>
                <p class="type-body-lg">
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
        <section class="section">
          <div class="container">
            {thesisMovements.map((m, i) => (
              <div class="grid-12" style={`padding-block:clamp(40px,5vw,64px); ${i > 0 ? 'border-top:1px solid var(--c-line);' : ''}`} data-reveal>
                <div style="grid-column: 1 / span 2;">
                  <span class="type-mono text-signal" style="font-size:1.1rem;">{m.index}</span>
                </div>
                <div style="grid-column: 3 / span 4;">
                  <h3 class="type-h3 balance">{m.title}</h3>
                </div>
                <div style="grid-column: 8 / span 5;">
                  <p class="type-body-lg">{m.body}</p>
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
                  See the thesis expressed as an ecosystem.
                </h2>
                <div style="margin-top:36px; display:flex; gap:16px; justify-content:center; flex-wrap:wrap;">
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
