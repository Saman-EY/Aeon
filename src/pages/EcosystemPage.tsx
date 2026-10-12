import { useSite } from '../lib/site-context'
import { Hero, InitiativeCards, ContactCTA } from '../components/Content'

export default function EcosystemPage() {
  const { s } = useSite()

  return (
    <>
      <Hero label={s.nav[0]} heading={s.groupTitle} intro={s.groupIntro} />
      <section className="section--tight">
        <div className="container">
          <div className="holding-map">
            <div className="holding-parent" dir="ltr">
              AEON
            </div>
            <InitiativeCards />
            <div className="shared-foundation">
              <h2 className="type-h3">{s.shared}</h2>
              <p className="type-body">{s.sharedBody}</p>
            </div>
          </div>
          <p className="formation-note type-body">{s.currentBody}</p>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
