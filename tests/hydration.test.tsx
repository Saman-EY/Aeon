import { act } from 'react'
import { hydrateRoot, type Root } from 'react-dom/client'
import { MemoryRouter } from 'react-router'
import { describe, expect, it, vi } from 'vitest'
import App from '../src/App'
import { renderPage } from '../src/prerender'
import { languages } from '../src/data/localized'

describe('React hydration of static output', () => {
  for (const lang of languages)
    it(`hydrates the ${lang} initiative without replacing its HTML`, async () => {
      const url = `/${lang}/ecosystem/axis`
      const container = document.createElement('div')
      container.innerHTML = renderPage(url).html
      document.body.append(container)
      const originalHeading = container.querySelector('h1')
      const onRecoverableError = vi.fn()
      let root: Root | undefined
      try {
        await act(async () => {
          root = hydrateRoot(
            container,
            <MemoryRouter initialEntries={[url]}>
              <App />
            </MemoryRouter>,
            { onRecoverableError },
          )
        })
        expect(onRecoverableError).not.toHaveBeenCalled()
        expect(container.querySelector('h1')).toBe(originalHeading)
        expect(document.documentElement.lang).toBe(lang)
        expect(document.head.querySelectorAll('title')).toHaveLength(1)
      } finally {
        await act(async () => root?.unmount())
        container.remove()
      }
    })
})
