import { footerLinks, site } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer class="footer border-t" id="contact">
      <div class="container">
        <div class="footer__grid">
          <div>
            <a href="/" class="nav__mark" style="margin-bottom:18px; display:inline-flex;">
              <span class="nav__mark-dot" aria-hidden="true"></span>
              AEON
            </a>
            <p class="type-body" style="max-width:34ch; margin-top:18px;">
              A financial and technology holding company building the systems
              behind better decisions.
            </p>
          </div>

          <div>
            <p class="footer__col-title">Ecosystem</p>
            {footerLinks.ecosystem.map((l) => (
              <a href={l.href} class="footer__link">{l.label}</a>
            ))}
          </div>

          <div>
            <p class="footer__col-title">Company</p>
            {footerLinks.company.map((l) => (
              <a href={l.href} class="footer__link">{l.label}</a>
            ))}
          </div>

          <div>
            <p class="footer__col-title">Connect</p>
            {footerLinks.connect.map((l) => (
              <a href={l.href} class="footer__link">{l.label}</a>
            ))}
          </div>
        </div>

        <div class="footer__bottom">
          <span>© {year} {site.legalName}. All rights reserved.</span>
          <span class="type-mono">Registered holding entity · Jurisdiction on request</span>
        </div>
      </div>
    </footer>
  )
}
