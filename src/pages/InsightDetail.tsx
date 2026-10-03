import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Seo } from '../components/Seo'
import { Btn, Rule } from '../components/UI'
import { insights, getInsightBySlug } from '../data/content'

export function InsightDetail({ slug }: { slug: string }) {
  const post = getInsightBySlug(slug)
  if (!post) return null

  const idx = insights.findIndex((p) => p.slug === slug)
  const next = insights[(idx + 1) % insights.length]

  return (
    <>
      <Seo title={post.title} path={`/insights/${post.slug}`} description={post.excerpt} />
      <Nav active="/insights" />

      <main id="main">
        <article>
          <section class="section" style="padding-top:calc(84px + clamp(40px,7vw,88px)); padding-bottom:clamp(32px,5vw,56px);">
            <div class="container">
              <div class="grid-12">
                <div style="grid-column: 1 / span 9;" data-reveal>
                  <a href="/insights" class="btn btn--text" style="margin-bottom:32px;" aria-label="Back to Insights">
                    <span>← All insights</span>
                  </a>
                  <div style="display:flex; gap:14px; align-items:center; margin-bottom:24px;">
                    <span class="tag">{post.category}</span>
                    <span class="type-caption">{post.date} · {post.readTime} read</span>
                  </div>
                  <h1 class="type-h1 balance" style="max-width:22ch;">{post.title}</h1>
                  <p class="type-body-lg" style="margin-top:28px; max-width:60ch;">{post.excerpt}</p>
                </div>
              </div>
            </div>
          </section>

          <Rule />

          <section class="section">
            <div class="container">
              <div class="grid-12">
                <div style="grid-column: 1 / span 7;">
                  {post.body.map((p) => (
                    <p class="type-body-lg pretty" style="margin-bottom:28px;" data-reveal>{p}</p>
                  ))}
                </div>
                <div style="grid-column: 9 / span 4;">
                  <div class="panel" style="padding:28px; position:sticky; top:120px;" data-reveal>
                    <p class="type-caption" style="margin-bottom:18px;">On this article</p>
                    <p class="type-body" style="margin-bottom:8px;"><strong class="text-ink">Category</strong></p>
                    <p class="type-body" style="margin-bottom:20px;">{post.category}</p>
                    <p class="type-body" style="margin-bottom:8px;"><strong class="text-ink">Published</strong></p>
                    <p class="type-body">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>

        <Rule />

        <section class="section">
          <div class="container">
            <div class="grid-12" data-reveal>
              <div style="grid-column: 1 / span 12;">
                <p class="type-caption" style="margin-bottom:20px;">Continue reading</p>
                <a href={`/insights/${next.slug}`} class="insight-card" style="border-top:1px solid var(--c-line); border-bottom:1px solid var(--c-line);">
                  <div class="insight-card__row">
                    <span class="insight-card__num">→</span>
                    <div>
                      <span class="tag tag--neutral" style="margin-bottom:12px;">{next.category}</span>
                      <h3 class="insight-card__title balance">{next.title}</h3>
                    </div>
                    <div class="insight-card__meta"><span>{next.readTime}</span></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="section" style="padding-block:clamp(56px,8vw,96px);">
          <div class="container">
            <div class="grid-12">
              <div style="grid-column: 1 / span 12; text-align:center;" data-reveal>
                <h2 class="type-h2 balance" style="max-width:20ch; margin-inline:auto;">
                  Building something that depends on the quality of a decision?
                </h2>
                <div style="margin-top:32px;">
                  <Btn href="/contact" variant="primary">Begin a conversation</Btn>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
