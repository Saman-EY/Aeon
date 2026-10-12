import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import { Hero } from '../components/Content'
import { useSite } from '../lib/site-context'
import { sendInquiry, type Inquiry } from '../lib/contact'

export default function ContactPage() {
  const { s, lang, href, initiatives, contactEmail, contactEndpoint } = useSite()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle')
  const controllerRef = useRef<AbortController | null>(null)
  const sendingRef = useRef(false)
  const contactEnabled = Boolean(contactEndpoint)
  useEffect(() => () => controllerRef.current?.abort(), [])

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!contactEnabled || sendingRef.current || !form.reportValidity()) return
    sendingRef.current = true
    setStatus('sending')
    const controller = new AbortController()
    controllerRef.current = controller
    const timer = setTimeout(() => controller.abort(), 15000)
    const data = Object.fromEntries(new FormData(form)) as Inquiry
    try {
      await sendInquiry(contactEndpoint, data, controller.signal)
      if (!controller.signal.aborted) {
        setStatus('sent')
        form.reset()
      }
    } catch {
      if (form.isConnected) setStatus('failed')
    } finally {
      clearTimeout(timer)
      sendingRef.current = false
      controllerRef.current = null
    }
  }

  return (
    <>
      <Hero label={s.nav[4]} heading={s.contactTitle} intro={s.contactIntro} />
      <section className="section--tight">
        <div className="container contact-layout">
          <div>
            {!contactEnabled && (
              <p className="contact-notice" role="status">
                {s.unavailable}
              </p>
            )}
            <form onSubmit={submit}>
              <fieldset disabled={!contactEnabled || status === 'sending'}>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="name">{s.name}</label>
                    <input
                      id="name"
                      name="name"
                      required
                      maxLength={120}
                      autoComplete="name"
                      dir="auto"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email">{s.email}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      maxLength={254}
                      autoComplete="email"
                      dir="ltr"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="organization">{s.organization}</label>
                    <input
                      id="organization"
                      name="organization"
                      maxLength={180}
                      autoComplete="organization"
                      dir="auto"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="topic">{s.topic}</label>
                    <select id="topic" name="topic">
                      <option value="general">{s.general}</option>
                      {initiatives.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="field form-wide">
                    <label htmlFor="purpose">{s.purpose}</label>
                    <select id="purpose" name="purpose">
                      {s.purposes.map((purpose, index) => (
                        <option
                          key={purpose}
                          value={['development', 'discovery', 'research', 'other'][index]}
                        >
                          {purpose}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="field form-wide">
                    <label htmlFor="message">{s.message}</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      maxLength={5000}
                      dir="auto"
                    />
                  </div>
                </div>
                <input type="hidden" name="language" value={lang} />
                <div className="honeypot" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>
                <p className="privacy-note">
                  {s.privacyNote} <Link to={href('/privacy')}>{s.privacy}</Link>
                </p>
                <div className="form-actions">
                  <button className="btn btn--primary" type="submit">
                    {status === 'sending' ? s.sending : s.send}
                  </button>
                </div>
              </fieldset>
              <p className="contact-status" role="status" aria-live="polite">
                {status === 'idle' ? '' : s[status]}
              </p>
            </form>
          </div>
          <aside className="panel contact-aside">
            <h2 className="type-h3">{s.direct}</h2>
            {contactEmail ? (
              <>
                <a className="contact-address" href={`mailto:${contactEmail}`} dir="ltr">
                  {contactEmail}
                </a>
                <a className="text-link" href={`mailto:${contactEmail}`}>
                  {s.emailCta}
                </a>
              </>
            ) : (
              <p className="type-body">{s.noEmail}</p>
            )}
          </aside>
        </div>
      </section>
    </>
  )
}
