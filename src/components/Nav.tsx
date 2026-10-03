import { Link } from 'react-router-dom'
import { nav } from '../data/content'

export function Nav({ active = '' }: { active?: string }) {
  return (
    <nav className="nav" id="site-nav" aria-label="Primary">
      <div className="container nav__inner">
        <Link to="/" className="nav__mark" aria-label="AEON — Home">
          <span className="nav__mark-dot" aria-hidden="true"></span>
          AEON
        </Link>

        <ul className="nav__links" role="list">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={`nav__link${active === item.href ? ' is-active' : ''}`}
                aria-current={active === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="nav__cta">
          Begin a conversation
        </Link>

        <button className="nav__toggle" id="nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="nav-mobile">
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className="nav__mobile" id="nav-mobile">
        <ul className="nav__mobile-links" role="list">
          {nav.map((item, i) => (
            <li key={item.href}>
              <Link to={item.href}>
                {item.label}
                <span className="idx">{String(i + 1).padStart(2, '0')}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn btn--primary" style={{ alignSelf: 'flex-start' }}>
          Begin a conversation
        </Link>
      </div>
    </nav>
  )
}
