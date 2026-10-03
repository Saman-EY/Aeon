import type { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

export function Eyebrow({ children }: PropsWithChildren) {
  return <span className="eyebrow">{children}</span>
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'left',
}: {
  eyebrow?: string
  title: string
  lead?: string
  align?: 'left' | 'center'
}) {
  return (
    <div
      className="grid-12"
      style={align === 'center' ? { textAlign: 'center' } : undefined}
      data-reveal
    >
      <div
        style={
          align === 'center'
            ? { gridColumn: '2 / span 10' }
            : { gridColumn: '1 / span 8' }
        }
      >
        {eyebrow && <div style={{ marginBottom: '20px' }}><Eyebrow>{eyebrow}</Eyebrow></div>}
        <h2 className="type-h2 balance">{title}</h2>
        {lead && <p className="type-body-lg pretty" style={{ marginTop: '22px', maxWidth: '56ch' }}>{lead}</p>}
      </div>
    </div>
  )
}

export function Btn({
  href,
  children,
  variant = 'primary',
  arrow = true,
}: PropsWithChildren<{ href: string; variant?: 'primary' | 'ghost' | 'text'; arrow?: boolean }>) {
  return (
    <Link to={href} className={`btn btn--${variant}`}>
      <span>{children}</span>
      {arrow && (
        <svg className="btn__arrow" width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
          <path d="M1 5H15M15 5L10.5 0.5M15 5L10.5 9.5" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      )}
    </Link>
  )
}

export function Rule() {
  return <div className="rule" role="presentation"></div>
}

export function Tag({ children, neutral = false }: PropsWithChildren<{ neutral?: boolean }>) {
  return <span className={`tag${neutral ? ' tag--neutral' : ''}`}>{children}</span>
}
