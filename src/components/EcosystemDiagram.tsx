import { ecosystem } from '../data/content'

// A restrained architectural node diagram expressing the flow:
// AEON -> Decision Intelligence -> Risk -> Protection -> Financial Infrastructure
// Rendered as inline SVG so it is crisp at any density and fully accessible.
export function EcosystemDiagram() {
  const nodeY = [64, 184, 304, 424]
  const cx = 90

  return (
    <div class="eco-diagram" role="img" aria-label="Diagram showing AEON's ecosystem flowing from decision intelligence, to risk, to protection, resting on shared financial infrastructure">
      <svg viewBox="0 0 640 500" width="100%" height="auto" preserveAspectRatio="xMinYMin meet" style="overflow:visible;">
        {/* connecting spine */}
        <line x1={cx} y1={nodeY[0]} x2={cx} y2={nodeY[3]} class="eco-diagram-line" stroke-width="1" />
        {/* AEON root marker above chain */}
        <g>
          <circle cx={cx} cy="16" r="4" fill="none" stroke="var(--c-signal)" stroke-width="1.2" />
          <line x1={cx} y1="20" x2={cx} y2={nodeY[0] - 22} class="eco-diagram-line" stroke-width="1" stroke-dasharray="2 4" />
          <text x={cx + 16} y="20" class="type-mono" fill="var(--c-ink-faint)" font-size="11" letter-spacing="0.08em">AEON — CAPITAL &amp; GOVERNANCE</text>
        </g>

        {ecosystem.map((node, i) => {
          const y = nodeY[i]
          return (
            <g class="eco-node" data-node={node.id} tabindex="0" role="button" aria-label={`${node.name} — ${node.layer}`}>
              <circle cx={cx} cy={y} r="6" fill="var(--c-bg)" stroke="var(--c-line-strong)" stroke-width="1.4" />
              <line x1={cx + 6} y1={y} x2={cx + 40} y2={y} class="eco-diagram-line" stroke-width="1" />
              <rect x={cx + 40} y={y - 30} width="560" height="60" fill="transparent" stroke="var(--c-line)" stroke-width="1" rx="2" />
              <text x={cx + 58} y={y - 8} class="type-mono" fill="var(--c-signal-dim)" font-size="10" letter-spacing="0.1em">
                {node.index} — {node.layer.toUpperCase()}
              </text>
              <text x={cx + 58} y={y + 16} fill="var(--c-ink)" font-size="17" font-weight="540" letter-spacing="-0.01em">
                {node.name}
              </text>
            </g>
          )
        })}
      </svg>

      <div id="eco-detail" class="panel" style="margin-top:40px; padding:clamp(24px,3vw,40px);">
        {ecosystem.map((node, i) => (
          <div class="eco-detail-panel" data-panel={node.id} style={i === 0 ? undefined : 'display:none;'}>
            <div style="display:flex; justify-content:space-between; gap:24px; flex-wrap:wrap; align-items:baseline; margin-bottom:16px;">
              <h3 class="type-h3">{node.name}</h3>
              <span class="tag">{node.layer}</span>
            </div>
            <p class="type-body-lg" style="margin-bottom:20px;">{node.description}</p>
            <div style="display:flex; flex-wrap:wrap; gap:10px;">
              {node.domains.map((d) => <span class="tag tag--neutral">{d}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
