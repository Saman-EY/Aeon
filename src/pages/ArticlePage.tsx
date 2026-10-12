import { useSite } from '../lib/site-context'
import { Link } from 'react-router'
import { Hero, ContactCTA } from '../components/Content'
import { readingMinutes } from '../data/articles'

export default function ArticlePage() {
  const { s, articles, path, href } = useSite()
  const post = articles.find((item) => path === `/insights/${item.slug}`)!
  return (
    <>
      <article>
        <Hero
          label={`${post.category} · ${post.year} · ${readingMinutes(post.body)} ${s.minute}`}
          heading={post.title}
          intro={post.excerpt}
        />
        <section className="section--tight">
          <div className="container article-layout">
            <div className="article-body">
              <p className="article-byline type-caption">
                {s.editorial} · {post.year}
              </p>
              {post.body.map((p) => (
                <p key={p} className="type-body-lg">
                  {p}
                </p>
              ))}
              <Link className="text-link" to={href('/insights')}>
                {s.allInsights}
              </Link>
            </div>
            <aside className="panel article-aside">
              <p className="type-caption">{s.related}</p>
              {articles
                .filter((a) => a.slug !== post.slug)
                .slice(0, 2)
                .map((a) => (
                  <Link key={a.slug} className="related-link" to={href(`/insights/${a.slug}`)}>
                    {a.title}
                  </Link>
                ))}
            </aside>
          </div>
        </section>
      </article>
      <ContactCTA />
    </>
  )
}
