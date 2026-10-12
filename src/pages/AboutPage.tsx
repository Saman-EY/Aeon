import { useSite } from '../lib/site-context'
import { Hero, InitiativeCards, ContactCTA } from '../components/Content'

export default function AboutPage() {
  const { s } = useSite()

  return (
    <>
      <Hero label={s.nav[3]} heading={s.aboutTitle} intro={s.aboutBody} />
      <section className="section--tight">
        <div className="container split-layout">
          <h2 className="type-h2">{s.aboutNext}</h2>
          <p className="type-body-lg">{s.aboutNextBody}</p>
        </div>
      </section>
      <section className="section section--border-t">
        <div className="container">
          <div className="section-heading">
            <h2 className="type-h2">{s.groupTitle}</h2>
          </div>
          <InitiativeCards />
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
