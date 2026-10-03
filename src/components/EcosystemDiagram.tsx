import { ecosystem } from '../data/content'

// A restrained architectural node diagram expressing the flow:
// AEON -> Decision Intelligence -> Risk -> Protection -> Financial Infrastructure
// Rendered as inline SVG so it is crisp at any density and fully accessible.
export function EcosystemDiagram() {
  const nodeY = [64, 184, 304, 424]
  const cx = 90

  return (
    <div className="eco-diagram" role="img" aria-label="Diagram showing AEON's ecosystem flowing from decision intelligence, to risk, to protection, resting on shared financial infrastructure">
      <svg viewBox="0 0 640 500" width="100%" height="auto" preserveAspectRatio="xMinYMin meet" style={{ overflow: 'visible' }}>
        {/* connecting spine */}
        <line x1={cx} y1={nodeY[0]} x2={cx} y2={nodeY[3]} className="eco-diagram-line" strokeWidth="1" />
        {/* AEON root marker above chain */}
        <g>
          <circle cx={cx} cy="16" r="4" fill="none" stroke="var(--c-signal)" strokeWidth="1.2" />
          <line x1={cx} y1="20" x2={cx} y2={nodeY[0] - 22} className="eco-diagram-line" strokeWidth="1" strokeDasharray="2 4" />
          <text x={cx + 16} y="20" className="type-mono" fill="var(--c-ink-faint)" fontSize="11" letterSpacing="0.08em">AEON — CAPITAL &amp; GOVERNANCE</text>
        </g>

        {ecosystem.map((node, i) => {
          const y = nodeY[i]
          return (
            <g key={node.id} className="eco-node" data-node={node.id} tabIndex={0} role="button" aria-label={`${node.name} — ${node.layer}`}>
              <circle cx={cx} cy={y} r="6" fill="var(--c-bg)" stroke="var(--c-line-strong)" strokeWidth="1.4" />
              <line x1={cx + 6} y1={y} x2={cx + 40} y2={y} className="eco-diagram-line" strokeWidth="1" />
              <rect x={cx + 40} y={y - 30} width="560" height="60" fill="transparent" stroke="var(--c-line)" strokeWidth="1" rx="2" />
              <text x={cx + 58} y={y - 8} className="type-mono" fill="var(--c-signal-dim)" fontSize="10" letterSpacing="0.1em">
                {node.index} — {node.layer.toUpperCase()}
              </text>
              <text x={cx + 58} y={y + 16} fill="var(--c-ink)" fontSize="17" fontWeight="540" letterSpacing="-0.01em">
                {node.name}
              </text>
            </g>
          )
        })}
      </svg>

      <div id="eco-detail" className="panel" style={{ marginTop: '40px', padding: 'clamp(24px,3vw,40px)' }}>
        {ecosystem.map((node, i) => (
          <div key={node.id} className="eco-detail-panel" data-panel={node.id} style={i === 0 ? undefined : { display: 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', alignItems: 'baseline', marginBottom: '16px' }}>
              <h3 className="type-h3">{node.name}</h3>
              <span className="tag">{node.layer}</span>
            </div>
            <p className="type-body-lg" style={{ marginBottom: '20px' }}>{node.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {node.domains.map((d) => <span key={d} className="tag tag--neutral">{d}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
