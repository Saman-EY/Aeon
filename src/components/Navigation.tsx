import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { useSite } from '../lib/site-context'
import { navPaths } from '../lib/routes'
import LanguageLinks from './LanguageLinks'
import { Button } from './Content'

export default function Navigation() {
  const { s, path, href } = useSite()
  const location = useLocation()
  const [openAt, setOpenAt] = useState<string | null>(null)
  const open = openAt === location.key
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const closeMenu = () => setOpenAt(null)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    if (!open) return
    const oldOverflow = document.body.style.overflowY
    document.body.style.overflowY = 'hidden'
    menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    function closeAndFocus() {
      setOpenAt(null)
      toggleRef.current?.focus()
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeAndFocus()
        return
      }
      if (event.key !== 'Tab') return
      const controls = [
        toggleRef.current,
        ...Array.from(menuRef.current?.querySelectorAll<HTMLElement>('a,button') || []),
      ].filter((element): element is HTMLElement => !!element)
      if (event.shiftKey && document.activeElement === controls[0]) {
        event.preventDefault()
        controls.at(-1)?.focus()
      } else if (!event.shiftKey && document.activeElement === controls.at(-1)) {
        event.preventDefault()
        controls[0]?.focus()
      }
    }
    const onResize = () => {
      if (window.innerWidth > 1120) closeAndFocus()
    }
    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflowY = oldOverflow
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <nav
      className={`nav${open ? ' is-open' : ''}${scrolled ? ' is-scrolled' : ''}`}
      aria-label={s.menu}
    >
      <div className="container nav__inner">
        <Link className="nav__mark" to={href('')} aria-label={`AEON — ${s.home}`} dir="ltr">
          <span className="nav__mark-dot" aria-hidden="true" />
          AEON
        </Link>
        <ul className="nav__links">
          {navPaths.map((item, index) => (
            <li key={item}>
              <Link
                className={`nav__link${path.startsWith(item) ? ' is-active' : ''}`}
                to={href(item)}
                aria-current={path.startsWith(item) ? 'page' : undefined}
              >
                {s.nav[index]}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-languages">
          <LanguageLinks />
        </div>
        <button
          ref={toggleRef}
          className="nav__toggle"
          aria-label={s.menu}
          aria-expanded={open}
          aria-controls="nav-mobile"
          onClick={() => setOpenAt(open ? null : location.key)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div ref={menuRef} className="nav__mobile" id="nav-mobile" hidden={!open} inert={!open}>
        <ul className="nav__mobile-links">
          {navPaths.map((item, index) => (
            <li key={item}>
              <Link to={href(item)} onClick={closeMenu}>
                {s.nav[index]}
                <span className="idx" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <LanguageLinks />
        <Button to="/contact" primary>
          {s.conversation}
        </Button>
      </div>
    </nav>
  )
}
