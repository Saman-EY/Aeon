import { Link } from 'react-router'
import { useSite } from '../lib/site-context'
import { navPaths } from '../lib/routes'
import LanguageLinks from './LanguageLinks'

export default function Footer() {
  const { s, href, initiatives } = useSite()
  return (
    <footer className="footer border-t">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link className="nav__mark" to={href('')} dir="ltr">
              AEON
            </Link>
            <p className="type-body footer-description">{s.formation}</p>
          </div>
          <div>
            <p className="footer__col-title">{s.nav[0]}</p>
            {initiatives.map((e) => (
              <Link key={e.id} className="footer__link" to={href(`/ecosystem/${e.id}`)}>
                <bdi>{e.name}</bdi>
              </Link>
            ))}
          </div>
          <div>
            <p className="footer__col-title">{s.company}</p>
            {navPaths.slice(1).map((p, i) => (
              <Link key={p} className="footer__link" to={href(p)}>
                {s.nav[i + 1]}
              </Link>
            ))}
            <Link className="footer__link" to={href('/privacy')}>
              {s.privacy}
            </Link>
          </div>
          <div>
            <p className="footer__col-title">{s.language}</p>
            <LanguageLinks />
            <Link className="footer__link" to={href('/contact')}>
              {s.conversation}
            </Link>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {new Date().getUTCFullYear()} <bdi>AEON</bdi>. {s.rights}
          </span>
          <span>{s.initiative}</span>
        </div>
      </div>
    </footer>
  )
}
