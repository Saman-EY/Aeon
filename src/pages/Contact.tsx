import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Seo } from '../components/Seo'
import { Rule } from '../components/UI'

export function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        path="/contact"
        description="Begin a conversation with AEON — for institutions and individuals building decision, risk, or protection infrastructure."
      />
      <Nav active="/contact" />

      <main id="main">
        <section className="section" style={{ paddingTop: 'calc(84px + clamp(40px,7vw,88px))', paddingBottom: 'clamp(32px,5vw,56px)' }}>
          <div className="container">
            <div className="grid-12">
              <div style={{ gridColumn: '1 / span 8' }} data-reveal>
                <span className="eyebrow">Contact</span>
                <h1 className="type-h1 balance" style={{ marginTop: '24px' }}>Begin a conversation.</h1>
                <p className="type-body-lg" style={{ marginTop: '24px', maxWidth: '52ch' }}>
                  Tell us briefly what you are working on and where it intersects
                  with decision intelligence, risk, or protection. We read every
                  message ourselves.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        <section className="section">
          <div className="container">
            <div className="grid-12">
              <div style={{ gridColumn: '1 / span 7' }} data-reveal>
                <form id="contact-form" noValidate>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                    <div className="field">
                      <label htmlFor="name">Full name</label>
                      <input type="text" id="name" name="name" required autoComplete="name" />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" required autoComplete="email" />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '32px' }}>
                    <div className="field">
                      <label htmlFor="organization">Organization</label>
                      <input type="text" id="organization" name="organization" autoComplete="organization" />
                    </div>
                    <div className="field">
                      <label htmlFor="topic">Area of interest</label>
                      <select id="topic" name="topic">
                        <option value="decision-intelligence">Decision Intelligence</option>
                        <option value="risk">Risk Infrastructure</option>
                        <option value="protection">Financial Protection</option>
                        <option value="infrastructure">Financial Infrastructure</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="field" style={{ marginTop: '32px' }}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required rows={5}></textarea>
                  </div>

                  <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <button type="submit" className="btn btn--primary" id="contact-submit">
                      <span>Send message</span>
                      <svg className="btn__arrow" width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                        <path d="M1 5H15M15 5L10.5 0.5M15 5L10.5 9.5" stroke="currentColor" strokeWidth="1.2" />
                      </svg>
                    </button>
                    <span id="contact-status" className="type-caption" role="status" aria-live="polite"></span>
                  </div>
                </form>
              </div>

              <div style={{ gridColumn: '9 / span 4' }} data-reveal>
                <div className="panel" style={{ padding: '32px' }}>
                  <p className="type-caption" style={{ marginBottom: '20px' }}>Direct correspondence</p>
                  <p className="type-body" style={{ marginBottom: '6px' }}><strong className="text-ink">General inquiries</strong></p>
                  <a href="mailto:contact@aeon.example" className="footer__link" style={{ paddingBlock: '0', marginBottom: '20px' }}>contact@aeon.example</a>
                  <p className="type-body" style={{ marginBottom: '6px' }}><strong className="text-ink">Careers</strong></p>
                  <a href="mailto:careers@aeon.example" className="footer__link" style={{ paddingBlock: '0', marginBottom: '20px' }}>careers@aeon.example</a>
                  <p className="type-body" style={{ marginBottom: '6px' }}><strong className="text-ink">Press</strong></p>
                  <a href="mailto:press@aeon.example" className="footer__link" style={{ paddingBlock: '0' }}>press@aeon.example</a>
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
