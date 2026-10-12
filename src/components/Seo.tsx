import { useEffect } from 'react'
import { useSite } from '../lib/site-context'
import { getHeadTags } from '../lib/metadata'

export default function Seo() {
  const site = useSite()
  useEffect(() => {
    document.documentElement.lang = site.lang
    document.documentElement.dir = site.lang === 'fa' ? 'rtl' : 'ltr'
    document.querySelectorAll('[data-aeon-seo]').forEach((element) => element.remove())
    for (const item of getHeadTags(site)) {
      const element = document.createElement(item.tag)
      element.setAttribute('data-aeon-seo', '')
      for (const [name, value] of Object.entries(item.attributes || {}))
        element.setAttribute(name, value)
      if (item.text) element.textContent = item.text
      document.head.append(element)
    }
  }, [site])
  return null
}
