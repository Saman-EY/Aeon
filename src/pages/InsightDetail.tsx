import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import { Btn, Rule } from "../components/UI";
import { insights, getInsightBySlug } from "../data/content";
import { Link, useParams } from "react-router-dom";

export function InsightDetail() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return null;
  }

  const post = getInsightBySlug(slug);
  if (!post) return null;

  const idx = insights.findIndex((p) => p.slug === slug);
  const next = insights[(idx + 1) % insights.length];

  return (
    <>
      <Seo title={post.title} path={`/insights/${post.slug}`} description={post.excerpt} />
      <Nav active="/insights" />

      <main id="main">
        <article>
          <section className="section" style={{ paddingTop: 'calc(84px + clamp(40px,7vw,88px))', paddingBottom: 'clamp(32px,5vw,56px)' }}>
            <div className="container">
              <div className="grid-12">
                <div style={{ gridColumn: '1 / span 9' }} data-reveal>
                  <Link to="/insights" className="btn btn--text" style={{ marginBottom: '32px' }} aria-label="Back to Insights">
                    <span>← All insights</span>
                  </Link>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '24px' }}>
                    <span className="tag">{post.category}</span>
                    <span className="type-caption">
                      {post.date} · {post.readTime} read
                    </span>
                  </div>
                  <h1 className="type-h1 balance" style={{ maxWidth: '22ch' }}>
                    {post.title}
                  </h1>
                  <p className="type-body-lg" style={{ marginTop: '28px', maxWidth: '60ch' }}>
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Rule />

          <section className="section">
            <div className="container">
              <div className="grid-12">
                <div style={{ gridColumn: '1 / span 7' }}>
                  {post.body.map((p, i) => (
                    <p key={i} className="type-body-lg pretty" style={{ marginBottom: '28px' }} data-reveal>
                      {p}
                    </p>
                  ))}
                </div>
                <div style={{ gridColumn: '9 / span 4' }}>
                  <div className="panel" style={{ padding: '28px', position: 'sticky', top: '120px' }} data-reveal>
                    <p className="type-caption" style={{ marginBottom: '18px' }}>
                      On this article
                    </p>
                    <p className="type-body" style={{ marginBottom: '8px' }}>
                      <strong className="text-ink">Category</strong>
                    </p>
                    <p className="type-body" style={{ marginBottom: '20px' }}>
                      {post.category}
                    </p>
                    <p className="type-body" style={{ marginBottom: '8px' }}>
                      <strong className="text-ink">Published</strong>
                    </p>
                    <p className="type-body">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>

        <Rule />

        <section className="section">
          <div className="container">
            <div className="grid-12" data-reveal>
              <div style={{ gridColumn: '1 / span 12' }}>
                <p className="type-caption" style={{ marginBottom: '20px' }}>
                  Continue reading
                </p>
                <Link
                  to={`/insights/${next.slug}`}
                  className="insight-card"
                  style={{ borderTop: '1px solid var(--c-line)', borderBottom: '1px solid var(--c-line)' }}
                >
                  <div className="insight-card__row">
                    <span className="insight-card__num">→</span>
                    <div>
                      <span className="tag tag--neutral" style={{ marginBottom: '12px' }}>
                        {next.category}
                      </span>
                      <h3 className="insight-card__title balance">{next.title}</h3>
                    </div>
                    <div className="insight-card__meta">
                      <span>{next.readTime}</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingBlock: 'clamp(56px,8vw,96px)' }}>
          <div className="container">
            <div className="grid-12">
              <div style={{ gridColumn: '1 / span 12', textAlign: 'center' }} data-reveal>
                <h2 className="type-h2 balance" style={{ maxWidth: '20ch', marginInline: 'auto' }}>
                  Building something that depends on the quality of a decision?
                </h2>
                <div style={{ marginTop: '32px' }}>
                  <Btn href="/contact" variant="primary">
                    Begin a conversation
                  </Btn>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
