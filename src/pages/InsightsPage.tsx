import { useSite } from '../lib/site-context'
import { Hero, PostList } from '../components/Content'

export default function InsightsPage() {
  const { s } = useSite()

  return (
    <>
      <Hero label={s.nav[2]} heading={s.insightsTitle} intro={s.insightsIntro} />
      <section className="section--tight">
        <div className="container">
          <PostList />
        </div>
      </section>
    </>
  )
}
