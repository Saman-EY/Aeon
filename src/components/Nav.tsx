import { nav } from '../data/content'

export function Nav({ active = '' }: { active?: string }) {
  return (
    <nav class="nav" id="site-nav" aria-label="Primary">
      <div class="container nav__inner">
        <a href="/" class="nav__mark" aria-label="AEON — Home">
          <span class="nav__mark-dot" aria-hidden="true"></span>
          AEON
        </a>

        <ul class="nav__links" role="list">
          {nav.map((item) => (
            <li>
              <a
                href={item.href}
                class={`nav__link${active === item.href ? ' is-active' : ''}`}
                aria-current={active === item.href ? 'page' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="/contact" class="nav__cta">
          Begin a conversation
        </a>

        <button class="nav__toggle" id="nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="nav-mobile">
          <span></span><span></span><span></span>
        </button>
      </div>

      <div class="nav__mobile" id="nav-mobile">
        <ul class="nav__mobile-links" role="list">
          {nav.map((item, i) => (
            <li>
              <a href={item.href}>
                {item.label}
                <span class="idx">{String(i + 1).padStart(2, '0')}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href="/contact" class="btn btn--primary" style="align-self:flex-start;">
          Begin a conversation
        </a>
      </div>
    </nav>
  )
}
