import { Link } from 'react-router-dom'
import { footerLinks, site } from '../data/content'

// Internal links use React Router; mailto: links stay as plain anchors.
function FooterLink({ href, label }: { href: string; label: string }) {
  if (href.startsWith('mailto:')) {
    return (
      <a href={href} className="footer__link">
        {label}
      </a>
    )
  }
  return (
    <Link to={href} className="footer__link">
      {label}
    </Link>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer border-t" id="contact">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link to="/" className="nav__mark" style={{ marginBottom: '18px', display: 'inline-flex' }}>
              <span className="nav__mark-dot" aria-hidden="true"></span>
              AEON
            </Link>
            <p className="type-body" style={{ maxWidth: '34ch', marginTop: '18px' }}>
              A financial and technology holding company building the systems
              behind better decisions.
            </p>
          </div>

          <div>
            <p className="footer__col-title">Ecosystem</p>
            {footerLinks.ecosystem.map((l) => (
              <FooterLink key={l.href} href={l.href} label={l.label} />
            ))}
          </div>

          <div>
            <p className="footer__col-title">Company</p>
            {footerLinks.company.map((l) => (
              <FooterLink key={l.href} href={l.href} label={l.label} />
            ))}
          </div>

          <div>
            <p className="footer__col-title">Connect</p>
            {footerLinks.connect.map((l) => (
              <FooterLink key={l.href} href={l.href} label={l.label} />
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} {site.legalName}. All rights reserved.</span>
          <span className="type-mono">Registered holding entity · Jurisdiction on request</span>
        </div>
      </div>
    </footer>
  )
}
