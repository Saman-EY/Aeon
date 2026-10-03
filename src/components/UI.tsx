import type { PropsWithChildren } from 'hono/jsx'

export function Eyebrow({ children }: PropsWithChildren) {
  return <span class="eyebrow">{children}</span>
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
      class="grid-12"
      style={align === 'center' ? 'text-align:center;' : undefined}
      data-reveal
    >
      <div style={align === 'center' ? 'grid-column: 2 / span 10;' : 'grid-column: 1 / span 8;'}>
        {eyebrow && <div style="margin-bottom:20px;"><Eyebrow>{eyebrow}</Eyebrow></div>}
        <h2 class="type-h2 balance">{title}</h2>
        {lead && <p class="type-body-lg pretty" style="margin-top:22px; max-width:56ch;">{lead}</p>}
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
    <a href={href} class={`btn btn--${variant}`}>
      <span>{children}</span>
      {arrow && (
        <svg class="btn__arrow" width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
          <path d="M1 5H15M15 5L10.5 0.5M15 5L10.5 9.5" stroke="currentColor" stroke-width="1.2" />
        </svg>
      )}
    </a>
  )
}

export function Rule() {
  return <div class="rule" role="presentation"></div>
}

export function Tag({ children, neutral = false }: PropsWithChildren<{ neutral?: boolean }>) {
  return <span class={`tag${neutral ? ' tag--neutral' : ''}`}>{children}</span>
}
