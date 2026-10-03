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
        <section class="section" style="padding-top:calc(84px + clamp(40px,7vw,88px)); padding-bottom:clamp(48px,6vw,72px);">
          <div class="container">
            <div class="grid-12">
              <div style="grid-column: 1 / span 12;" data-reveal>
                <span class="eyebrow">About AEON</span>
                <h1 class="type-h1 balance" style="margin-top:24px; max-width:20ch;">
                  An institution built for the long term, from the first decision onward.
                </h1>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        <section class="section">
          <div class="container">
            <div class="grid-12">
              <div style="grid-column: 1 / span 4;" data-reveal>
                <span class="eyebrow">Why AEON exists</span>
              </div>
              <div style="grid-column: 5 / span 8;" data-reveal>
                <p class="type-h3 pretty" style="font-weight:460; color:var(--c-ink-dim);">
                  Most financial institutions are built around the availability of
                  capital: raise it, deploy it, report on it. AEON is built around
                  the decision that precedes deployment — because that decision,
                  more than the capital itself, determines the outcome.
                </p>
                <p class="type-body-lg pretty" style="margin-top:28px; max-width:62ch;">
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
        <section class="section">
          <div class="container">
            <div class="grid-12" data-reveal>
              <div style="grid-column: 1 / span 12;">
                <span class="eyebrow">How AEON operates</span>
              </div>
            </div>
            <div style="margin-top:16px;">
              {aboutPrinciples.map((p, i) => (
                <div class="grid-12" style={`padding-block:clamp(36px,5vw,56px); ${i > 0 ? 'border-top:1px solid var(--c-line);' : ''}`} data-reveal>
                  <div style="grid-column: 1 / span 2;">
                    <span class="type-mono text-signal">{p.index}</span>
                  </div>
                  <div style="grid-column: 3 / span 3;">
                    <h3 class="type-h3 balance">{p.title}</h3>
                  </div>
                  <div style="grid-column: 7 / span 6;">
                    <p class="type-body-lg">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* What kind of institution */}
        <section class="section">
          <div class="container">
            <div class="grid-12">
              <div style="grid-column: 1 / span 12; text-align:center;" data-reveal>
                <p class="eyebrow" style="justify-content:center; margin-bottom:28px;">What we are becoming</p>
                <h2 class="type-h1 balance" style="max-width:22ch; margin-inline:auto;">
                  A quietly durable institution — measured in decades, not funding rounds.
                </h2>
                <p class="type-body-lg" style="margin-top:28px; max-width:56ch; margin-inline:auto;">
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

        <section class="section" style="padding-block:clamp(72px,10vw,120px);">
          <div class="container">
            <div class="grid-12">
              <div style="grid-column: 1 / span 12; text-align:center;" data-reveal>
                <h2 class="type-h1 balance" style="max-width:18ch; margin-inline:auto;">
                  Begin a conversation with AEON.
                </h2>
                <div style="margin-top:36px; display:flex; gap:16px; justify-content:center; flex-wrap:wrap;">
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
