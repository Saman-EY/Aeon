import { useSite } from '../lib/site-context'
import { Hero, ContactCTA } from '../components/Content'

export default function ThesisPage() {
  const { s, principles } = useSite()

  return (
    <>
      <Hero label={s.nav[1]} heading={s.thesisTitle} intro={s.thesisIntro} />
      <section className="section--tight">
        <div className="container principles">
          {principles.map((p, i) => (
            <section key={p.title}>
              <span className="type-mono">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="type-h3">{p.title}</h2>
                <p className="type-body-lg">{p.body}</p>
              </div>
            </section>
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
