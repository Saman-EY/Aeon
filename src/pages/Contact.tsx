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
        <section class="section" style="padding-top:calc(84px + clamp(40px,7vw,88px)); padding-bottom:clamp(32px,5vw,56px);">
          <div class="container">
            <div class="grid-12">
              <div style="grid-column: 1 / span 8;" data-reveal>
                <span class="eyebrow">Contact</span>
                <h1 class="type-h1 balance" style="margin-top:24px;">Begin a conversation.</h1>
                <p class="type-body-lg" style="margin-top:24px; max-width:52ch;">
                  Tell us briefly what you are working on and where it intersects
                  with decision intelligence, risk, or protection. We read every
                  message ourselves.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        <section class="section">
          <div class="container">
            <div class="grid-12">
              <div style="grid-column: 1 / span 7;" data-reveal>
                <form id="contact-form" novalidate>
                  <div style="display:grid; grid-template-columns:1fr 1fr; gap:32px;">
                    <div class="field">
                      <label for="name">Full name</label>
                      <input type="text" id="name" name="name" required autocomplete="name" />
                    </div>
                    <div class="field">
                      <label for="email">Email</label>
                      <input type="email" id="email" name="email" required autocomplete="email" />
                    </div>
                  </div>

                  <div style="display:grid; grid-template-columns:1fr 1fr; gap:32px; margin-top:32px;">
                    <div class="field">
                      <label for="organization">Organization</label>
                      <input type="text" id="organization" name="organization" autocomplete="organization" />
                    </div>
                    <div class="field">
                      <label for="topic">Area of interest</label>
                      <select id="topic" name="topic">
                        <option value="decision-intelligence">Decision Intelligence</option>
                        <option value="risk">Risk Infrastructure</option>
                        <option value="protection">Financial Protection</option>
                        <option value="infrastructure">Financial Infrastructure</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div class="field" style="margin-top:32px;">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" required rows={5}></textarea>
                  </div>

                  <div style="margin-top:40px; display:flex; align-items:center; gap:20px;">
                    <button type="submit" class="btn btn--primary" id="contact-submit">
                      <span>Send message</span>
                      <svg class="btn__arrow" width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                        <path d="M1 5H15M15 5L10.5 0.5M15 5L10.5 9.5" stroke="currentColor" stroke-width="1.2" />
                      </svg>
                    </button>
                    <span id="contact-status" class="type-caption" role="status" aria-live="polite"></span>
                  </div>
                </form>
              </div>

              <div style="grid-column: 9 / span 4;" data-reveal>
                <div class="panel" style="padding:32px;">
                  <p class="type-caption" style="margin-bottom:20px;">Direct correspondence</p>
                  <p class="type-body" style="margin-bottom:6px;"><strong class="text-ink">General inquiries</strong></p>
                  <a href="mailto:contact@aeon.example" class="footer__link" style="padding-block:0; margin-bottom:20px;">contact@aeon.example</a>
                  <p class="type-body" style="margin-bottom:6px;"><strong class="text-ink">Careers</strong></p>
                  <a href="mailto:careers@aeon.example" class="footer__link" style="padding-block:0; margin-bottom:20px;">careers@aeon.example</a>
                  <p class="type-body" style="margin-bottom:6px;"><strong class="text-ink">Press</strong></p>
                  <a href="mailto:press@aeon.example" class="footer__link" style="padding-block:0;">press@aeon.example</a>
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
