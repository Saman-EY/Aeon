// =============================================================================
// AEON — Content Layer
// Centralised copy & structural data. No fabricated facts, figures, clients,
// partnerships, or certifications are introduced here — only structural
// content describing what AEON is, how it thinks, and how its ecosystem
// is organised.
// =============================================================================

export const site = {
  name: 'AEON',
  legalName: 'AEON Holdings',
  tagline: 'Building the architecture behind better financial decisions.',
  description:
    'AEON is a financial and technology holding company. We design decision intelligence, risk, and protection infrastructure for institutions and individuals who treat capital allocation as a discipline.',
  url: 'https://aeon.example',
  themeColor: '#06070A',
}

export const nav = [
  { label: 'Ecosystem', href: '/ecosystem' },
  { label: 'Thesis', href: '/thesis' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

// -----------------------------------------------------------------------------
// Ecosystem — treated as one architecture, not a product list.
// Flow: AEON (capital & governance) → Decision Intelligence → Risk →
// Protection → Financial Infrastructure.
// -----------------------------------------------------------------------------
export const ecosystem = [
  {
    id: 'axis',
    name: 'AEON Axis',
    layer: 'Decision Intelligence',
    index: '01',
    summary:
      'Analytical infrastructure for capital allocation — the systems that turn information into a decision.',
    description:
      'Axis is the reasoning layer of the ecosystem. It exists to compress the distance between information and judgment: structuring signals, modelling scenarios, and surfacing the trade-offs a decision actually depends on. Axis does not predict markets. It disciplines how decisions about them are made.',
    domains: ['Portfolio construction logic', 'Scenario modelling', 'Signal structuring', 'Decision review systems'],
  },
  {
    id: 'sentinel',
    name: 'AEON Sentinel',
    layer: 'Risk',
    index: '02',
    summary:
      'Continuous risk observation — the discipline of knowing what could go wrong before it does.',
    description:
      'Sentinel monitors exposure across time horizons, correlating positions, counterparties, and macro conditions into a single risk posture. Its purpose is early legibility: risk that is visible early is risk that can be governed, not just survived.',
    domains: ['Exposure monitoring', 'Counterparty risk mapping', 'Stress scenarios', 'Governance reporting'],
  },
  {
    id: 'aegis',
    name: 'AEON Aegis',
    layer: 'Protection',
    index: '03',
    summary:
      'Structural safeguards for capital — protection engineered into the system, not added after the fact.',
    description:
      'Aegis translates risk intelligence into protective structure: contingency architecture, capital preservation frameworks, and the operational safeguards that keep a decision defensible under stress. Protection, here, is a design property — not an insurance product bolted on afterward.',
    domains: ['Capital preservation frameworks', 'Contingency architecture', 'Operational resilience', 'Continuity planning'],
  },
  {
    id: 'infrastructure',
    name: 'Financial Infrastructure',
    layer: 'Foundation',
    index: '04',
    summary:
      'The execution and data layer that lets Axis, Sentinel, and Aegis operate as one system.',
    description:
      'Underneath the ecosystem sits shared infrastructure — data pipelines, execution rails, and interoperability standards — so that intelligence, risk, and protection are never three disconnected tools, but one continuously informed architecture.',
    domains: ['Data & execution pipelines', 'Interoperability standards', 'Systems integration', 'Operational tooling'],
  },
]

// -----------------------------------------------------------------------------
// Capabilities — what AEON builds, grouped, concise.
// -----------------------------------------------------------------------------
export const capabilities = [
  {
    index: '01',
    title: 'Decision Intelligence',
    description:
      'Frameworks and tooling that structure how capital decisions get made — from signal to scenario to committed position.',
  },
  {
    index: '02',
    title: 'Risk Infrastructure',
    description:
      'Systems that make exposure visible in real time, across portfolios, counterparties, and correlated events.',
  },
  {
    index: '03',
    title: 'Financial Protection',
    description:
      'Structural safeguards engineered into capital architecture, not appended as an afterthought.',
  },
  {
    index: '04',
    title: 'Trading & Execution Infrastructure',
    description:
      'The operational layer that carries decisions into markets with discipline, speed, and traceability.',
  },
  {
    index: '05',
    title: 'Enterprise Finance Technology',
    description:
      'Internal tooling for institutions that need to reason about capital the way AEON does — rigorously, and at scale.',
  },
  {
    index: '06',
    title: 'AI-Assisted Decision Systems',
    description:
      'Applied intelligence in service of judgment — narrowing uncertainty without replacing accountability.',
  },
]

// -----------------------------------------------------------------------------
// Thesis — the philosophy, broken into readable movements.
// -----------------------------------------------------------------------------
export const thesisStatement =
  'The quality of a decision matters more than the mere availability of capital.'

export const thesisMovements = [
  {
    index: '01',
    title: 'Capital is abundant. Judgment is not.',
    body:
      'Access to capital has never been the binding constraint it once was. What separates durable outcomes from fragile ones is the quality of the decisions capital is deployed through — and that quality is a discipline, not an accident.',
  },
  {
    index: '02',
    title: 'A good decision is legible.',
    body:
      'It can be explained, audited, and defended after the fact — not just justified in hindsight. AEON builds systems that make the reasoning behind a decision as durable as the decision itself.',
  },
  {
    index: '03',
    title: 'Risk is a design input, not an event.',
    body:
      'Institutions that treat risk as something to react to are always one step behind. AEON treats risk as a variable to be continuously modelled, priced, and structured into decisions from the outset.',
  },
  {
    index: '04',
    title: 'Protection is architecture, not insurance.',
    body:
      'Resilience should be built into how capital is structured, not purchased as a policy after exposure is already taken. Aegis exists because protection designed in advance behaves differently from protection bought under pressure.',
  },
  {
    index: '05',
    title: 'Time horizon is a competitive advantage.',
    body:
      'Short-term optimization compounds fragility. AEON is built to think in years and decades — because systems designed for the long term make different, better decisions today.',
  },
]

// -----------------------------------------------------------------------------
// About
// -----------------------------------------------------------------------------
export const aboutPrinciples = [
  {
    index: '01',
    title: 'Selective by design',
    body:
      'AEON does not pursue every opportunity capital markets present. We build where decision quality can be materially improved by better systems — and pass on everything else.',
  },
  {
    index: '02',
    title: 'Systems over heroics',
    body:
      'We do not rely on individual brilliance to produce good outcomes repeatedly. We build institutional systems — decision frameworks, risk models, protective structures — that make good judgment repeatable.',
  },
  {
    index: '03',
    title: 'Calm under uncertainty',
    body:
      'Markets reward composure more than speed. AEON is built to operate with the same discipline in volatile conditions as in calm ones.',
  },
  {
    index: '04',
    title: 'Long-term orientation',
    body:
      'Every entity in the AEON ecosystem is evaluated against a multi-decade horizon, not a quarterly one. This shapes what we build and what we decline to build.',
  },
]

// -----------------------------------------------------------------------------
// Insights — editorial / research placeholder structure. No fabricated
// data or statistics are included; content is framed as institutional
// commentary categories rather than dated claims.
// -----------------------------------------------------------------------------
export const insightCategories = ['Markets', 'Risk', 'Decision Science', 'Financial Infrastructure', 'Technology', 'Strategy']

export const insights = [
  {
    slug: 'quality-of-decisions-over-availability-of-capital',
    category: 'Decision Science',
    title: 'Why the quality of a decision matters more than the availability of capital',
    excerpt:
      'Capital access has stopped being the binding constraint for most serious institutions. What remains scarce — and decisive — is judgment under uncertainty.',
    readTime: '7 min',
    date: '2026',
    body: [
      'For most of financial history, capital itself was the constraint. Institutions and individuals who could access it moved faster and further than those who could not. That asymmetry has largely closed. Capital today moves quickly, broadly, and — in relative terms — cheaply.',
      'What has not closed is the asymmetry in judgment. Two allocators with identical access to capital, identical information, and identical timing can produce categorically different outcomes, because the decision layer between information and action is where quality is actually determined.',
      'This is the premise AEON is built around: if capital is abundant and judgment is scarce, then the highest-leverage systems to build are not new sources of capital, but better architecture for the decisions capital moves through — structuring information, modelling trade-offs, and making the reasoning behind a commitment as durable as the commitment itself.',
      'This does not mean capital is irrelevant. It means capital is necessary but no longer sufficient. The institutions that will compound advantage over the next decade are the ones that treat decision quality as an engineered property of their systems, not a byproduct of individual talent.',
    ],
  },
  {
    slug: 'legible-risk-in-correlated-markets',
    category: 'Risk',
    title: 'Legible risk in an increasingly correlated market structure',
    excerpt:
      'As asset classes correlate more tightly under stress, the institutions that survive are the ones whose risk posture was visible before the stress arrived.',
    readTime: '9 min',
    date: '2026',
    body: [
      'Correlation is a fair-weather statistic. Asset classes that behave independently in calm markets tend to move together precisely when independence would matter most — during liquidity shocks, macro surprises, and systemic stress events.',
      'The practical consequence is that diversification computed on historical, low-stress correlation data quietly understates real exposure. By the time correlation converges toward one, it is usually too late to restructure a position without cost.',
      'Legibility is the alternative to prediction. Rather than trying to forecast when correlations will spike, a risk system can be built to continuously surface how exposure is structured — across positions, counterparties, and time horizons — so that when conditions shift, the institution already understands its posture instead of discovering it under pressure.',
      'This is the design principle behind Sentinel: risk as a continuously observed property of the system, not a quarterly report. Institutions that can see their exposure early are the ones with the option to act early — before markets remove that option for them.',
    ],
  },
  {
    slug: 'protection-as-architecture',
    category: 'Strategy',
    title: 'Protection as architecture, not insurance',
    excerpt:
      'Structural resilience behaves differently when it is designed into a system from the outset, rather than purchased in response to exposure already taken.',
    readTime: '6 min',
    date: '2026',
    body: [
      'Most institutions treat protection as something purchased after exposure already exists — a policy layered on top of a position that was structured without protection in mind. This ordering matters more than it appears to.',
      'Protection designed into a structure from the outset can shape the structure itself: position sizing, contingency triggers, and capital reserves can all be calibrated jointly, rather than retrofitted around decisions that were already made.',
      'Protection purchased afterward, by contrast, inherits all the constraints of a structure that was never designed to be protected — and tends to be priced, and to perform, accordingly.',
      'AEON treats protection as a design property, not a product category. Aegis exists to make contingency architecture and capital preservation part of how a decision is built, not an insurance line added once the decision is already committed.',
    ],
  },
  {
    slug: 'infrastructure-behind-institutional-judgment',
    category: 'Financial Infrastructure',
    title: 'The infrastructure behind institutional judgment',
    excerpt:
      'Good decisions require more than good analysts — they require pipelines, standards, and systems that keep information trustworthy at the moment judgment is exercised.',
    readTime: '8 min',
    date: '2026',
    body: [
      'A decision is only as good as the information it is built on, and information is only as good as the infrastructure that produced, transported, and reconciled it. This is easy to state and consistently underinvested in.',
      'Institutions often invest heavily in the visible layer of decision-making — analysts, committees, frameworks — while treating the underlying data pipelines as a solved, low-priority problem. In practice, this is where a surprising amount of institutional risk actually lives: stale data, silent reconciliation failures, and inconsistent standards across systems.',
      'Financial infrastructure, in the AEON sense, is the connective tissue that keeps decision intelligence, risk monitoring, and protective structure operating as one system rather than three disconnected tools reading from different truths.',
      'It is deliberately the least visible layer of the ecosystem — and the one that determines whether everything built above it can actually be trusted.',
    ],
  },
  {
    slug: 'time-horizon-as-strategy',
    category: 'Strategy',
    title: 'Time horizon as a strategic instrument, not a constraint',
    excerpt:
      'Institutions that explicitly design for multi-decade horizons make categorically different decisions than those optimizing for the next reporting cycle.',
    readTime: '5 min',
    date: '2026',
    body: [
      'Time horizon is rarely treated as a design choice. More often, it is inherited — set by reporting cycles, fund lifespans, or organizational incentives — and every other decision is optimized within whatever horizon happens to already exist.',
      'This is backwards. Time horizon determines which trade-offs are even visible. A decision that looks suboptimal on a one-year horizon can be the correct decision on a ten-year horizon, and vice versa — not because the facts changed, but because the frame changed.',
      'Institutions built explicitly for multi-decade horizons make different decisions almost by default: they under-optimize for short-term volatility, they over-invest in structural resilience, and they are willing to be patient in ways that shorter-horizon capital structurally cannot afford to be.',
      'AEON treats long time horizon not as a marketing claim, but as an actual constraint placed on every entity in the ecosystem — a filter that changes what gets built, and what gets declined.',
    ],
  },
  {
    slug: 'ai-assisted-judgment-without-abdication',
    category: 'Technology',
    title: 'Applied intelligence in decision systems, without abdicating judgment',
    excerpt:
      'The role of AI in financial decisions is to narrow uncertainty and surface trade-offs — not to remove the human accountability a serious decision requires.',
    readTime: '10 min',
    date: '2026',
    body: [
      'There is a version of "AI in finance" that amounts to automating judgment away — letting a model produce a decision that a human then rubber-stamps. AEON does not build toward that version.',
      'The more durable use of applied intelligence is narrower and less dramatic: compressing large volumes of information into structured scenarios, surfacing correlations a human would take too long to find manually, and stress-testing assumptions faster than a committee could do by hand.',
      'In every case, the system exists to inform judgment, not replace it. Accountability for a capital decision should sit with the people and institutions making it — a model can narrow the uncertainty around a decision, but it should not be allowed to absorb the responsibility for it.',
      'This is a design constraint, not a caveat. Decision systems inside AEON are built so that the reasoning remains legible to the humans accountable for the outcome — because a decision nobody can explain is not actually a decision an institution has made; it is one it has outsourced.',
    ],
  },
]

export function getInsightBySlug(slug: string) {
  return insights.find((a) => a.slug === slug)
}

// -----------------------------------------------------------------------------
// Footer links
// -----------------------------------------------------------------------------
export const footerLinks = {
  ecosystem: ecosystem.map((e) => ({ label: e.name, href: `/ecosystem#${e.id}` })),
  company: [
    { label: 'About', href: '/about' },
    { label: 'Thesis', href: '/thesis' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
  connect: [
    { label: 'General inquiries', href: 'mailto:contact@aeon.example' },
    { label: 'Careers', href: 'mailto:careers@aeon.example' },
    { label: 'Press', href: 'mailto:press@aeon.example' },
  ],
}
