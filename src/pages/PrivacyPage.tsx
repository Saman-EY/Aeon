import { useSite } from '../lib/site-context'
import { Hero } from '../components/Content'

export default function PrivacyPage() {
  const { s, contactEmail } = useSite()

  return (
    <>
      <Hero label={s.privacy} heading={s.privacyTitle} />
      <section className="section--tight">
        <div className="container privacy-content">
          <p className="type-body-lg">{s.privacyBody}</p>
          <p className="type-body-lg">{s.privacyContact}</p>
          {contactEmail && (
            <a className="text-link" dir="ltr" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          )}
        </div>
      </section>
    </>
  )
}
