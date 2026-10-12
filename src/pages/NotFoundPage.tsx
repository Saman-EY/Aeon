import { useSite } from '../lib/site-context'
import { Button, Hero } from '../components/Content'

export default function NotFoundPage() {
  const { s } = useSite()

  return (
    <>
      <Hero label="404" heading={s.notFound} intro={s.notFoundBody} />
      <div className="container section--tight">
        <Button to="" primary>
          {s.home}
        </Button>
      </div>
    </>
  )
}
