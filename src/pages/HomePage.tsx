import { useSite } from '../lib/site-context'
import { Link } from 'react-router'
import { Button, InitiativeCards, ContactCTA, PostList } from '../components/Content'

export default function HomePage() {
  const { s, initiatives, href } = useSite()

  return (
    <>
      <section className="home-hero container">
        <div>
          <p className="eyebrow">AEON · {s.formation}</p>
          <h1 className="type-display balance">{s.hero}</h1>
          <p className="type-body-lg intro-copy">{s.description}</p>
          <div className="actions">
            <Button to="/ecosystem" primary>
              {s.explore}
            </Button>
            <Button to="/contact">{s.conversation}</Button>
          </div>
        </div>
        <aside className="hero-architecture">
          <p className="type-caption">{s.nav[0]}</p>
          {initiatives.map((e, i) => (
            <Link key={e.id} to={href(`/ecosystem/${e.id}`)}>
              <span className="type-mono">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <strong dir="ltr">{e.name}</strong>
                <p>{e.role}</p>
              </div>
            </Link>
          ))}
          <p className="hero-foundation">{s.shared}</p>
        </aside>
      </section>
      <section className="section section--border-t">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{s.nav[0]}</p>
            <h2 className="type-h2">{s.groupTitle}</h2>
            <p className="type-body-lg">{s.groupIntro}</p>
          </div>
          <InitiativeCards />
        </div>
      </section>
      <section className="section section--border-t">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">{s.current}</p>
            <h2 className="type-h2">{s.aboutNext}</h2>
          </div>
          <div>
            <p className="type-body-lg">{s.currentBody}</p>
            <Link className="text-link" to={href('/about')}>
              {s.nav[3]}
            </Link>
          </div>
        </div>
      </section>
      <section className="section section--border-t">
        <div className="container thesis-feature">
          <p className="eyebrow">{s.nav[1]}</p>
          <h2 className="type-h2">{s.thesisTitle}</h2>
          <p className="type-body-lg">{s.thesisIntro}</p>
          <Link className="text-link" to={href('/thesis')}>
            {s.readThesis}
          </Link>
        </div>
      </section>
      <section className="section section--border-t">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{s.nav[2]}</p>
            <h2 className="type-h2">{s.insightsTitle}</h2>
          </div>
          <PostList limit={3} />
          <Link className="text-link" to={href('/insights')}>
            {s.allInsights}
          </Link>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
