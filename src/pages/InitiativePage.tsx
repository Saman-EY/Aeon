import { useSite } from '../lib/site-context'
import { Hero, ContactCTA } from '../components/Content'

export default function InitiativePage() {
  const { s, initiatives, path } = useSite()
  const initiative = initiatives.find((item) => path === `/ecosystem/${item.id}`)!
  return (
    <>
      <Hero label={s.nav[0]} heading={initiative.name} intro={initiative.role} />
      <section className="section--tight">
        <div className="container">
          <p className="stage-label">{s.initiative}</p>
          <p className="type-body-lg initiative-summary">{initiative.summary}</p>
          <div className="detail-grid">
            {[
              { title: s.problem, body: initiative.problem },
              { title: s.audience, body: initiative.audience },
              { title: s.output, body: initiative.output },
            ].map((x) => (
              <section key={x.title}>
                <h2 className="type-h3">{x.title}</h2>
                <p className="type-body-lg">{x.body}</p>
              </section>
            ))}
          </div>
          <section className="focus-section">
            <h2 className="type-h3">{s.focus}</h2>
            <ul className="focus-list">
              {initiative.domains.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </section>
          <section className="workflow-section">
            <p className="eyebrow">{s.example}</p>
            <ol className="workflow">
              {initiative.steps.map((step, i) => (
                <li key={step}>
                  <span className="type-mono">{String(i + 1).padStart(2, '0')}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
            <p className="type-body">{s.exampleNote}</p>
          </section>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
