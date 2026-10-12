import { describe, it, expect, vi } from 'vitest'
import { render, screen, within, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import App from '../src/App'
import { getCopy, languages } from '../src/data/localized'
import { getArticles } from '../src/data/articles'
import { createSiteContext, SiteContext } from '../src/lib/site-context'
import { resolveRoute } from '../src/lib/routes'
import ContactPage from '../src/pages/ContactPage'

function mount(url: string) {
  return render(
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>,
  )
}

describe('Localized React navigation', () => {
  for (const lang of languages)
    it(`renders ${lang} and sets document language/direction`, () => {
      mount(`/${lang}/`)
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(getCopy(lang).hero)
      expect(document.documentElement).toHaveAttribute('lang', lang)
      expect(document.documentElement).toHaveAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr')
      expect(document.head.querySelectorAll('title')).toHaveLength(1)
      expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
        'href',
        `https://aeon-st.vercel.app/${lang}/`,
      )
    })

  it('changes language on the same article and preserves query and hash', async () => {
    const user = userEvent.setup()
    const slug = getArticles('en')[0].slug
    mount(`/en/insights/${slug}?from=note#main`)
    await user.click(screen.getAllByRole('link', { name: 'فارسی' })[0])
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(getArticles('fa')[0].title)
    expect(document.documentElement.dir).toBe('rtl')
    expect(localStorage.getItem('aeon_language')).toBe('fa')
    expect(screen.getAllByRole('link', { name: 'Italiano' })[0]).toHaveAttribute(
      'href',
      `/it/insights/${slug}?from=note#main`,
    )
    expect(document.head.querySelectorAll('link[rel="alternate"]')).toHaveLength(5)
  })

  it('navigates from an initiative card without a document reload', async () => {
    const user = userEvent.setup()
    mount('/tr/ecosystem')
    await user.click(within(screen.getByRole('main')).getByRole('link', { name: /Axis/ }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Axis')
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://aeon-st.vercel.app/tr/ecosystem/axis',
    )
  })

  it('restores the saved language for root and legacy URLs', async () => {
    localStorage.setItem('aeon_language', 'it')
    mount('/about')
    await waitFor(() =>
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(getCopy('it').aboutTitle),
    )
  })

  it('shows a localized missing page and removes canonical links', () => {
    mount('/fa/missing')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(getCopy('fa').notFound)
    expect(document.head.querySelector('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, follow',
    )
    expect(document.head.querySelector('link[rel="canonical"]')).toBeNull()
  })

  it('opens the mobile menu, traps focus, and closes with Escape', async () => {
    const user = userEvent.setup()
    mount('/en/')
    const toggle = screen.getByRole('button', { name: getCopy('en').menu })
    const menu = document.getElementById('nav-mobile')!
    expect(menu).not.toBeVisible()
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(menu).toBeVisible()
    expect(within(menu).getAllByRole('link')[0]).toHaveFocus()
    toggle.focus()
    await user.tab({ shift: true })
    expect(within(menu).getAllByRole('link').at(-1)).toHaveFocus()
    await user.keyboard('{Escape}')
    expect(menu).not.toBeVisible()
    expect(toggle).toHaveFocus()
    expect(document.body.style.overflowY).toBe('')
  })

  it('closes the mobile menu after navigation', async () => {
    const user = userEvent.setup()
    mount('/en/')
    const toggle = screen.getByRole('button', { name: getCopy('en').menu })
    await user.click(toggle)
    await user.click(
      within(document.getElementById('nav-mobile')!).getByRole('link', { name: /About/ }),
    )
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(getCopy('en').aboutTitle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.body.style.overflowY).toBe('')
  })
})

describe('Contact service integration', () => {
  const s = getCopy('en')
  const mountContact = (endpoint = '') => {
    const site = { ...createSiteContext(resolveRoute('/en/contact')), contactEndpoint: endpoint }
    return render(
      <MemoryRouter>
        <SiteContext.Provider value={site}>
          <ContactPage />
        </SiteContext.Provider>
      </MemoryRouter>,
    )
  }
  async function fillForm() {
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(s.name), 'Test visitor')
    await user.type(screen.getByLabelText(s.email), 'test@example.test')
    await user.type(screen.getByLabelText(s.message), 'A collaboration inquiry.')
    return user
  }
  it('keeps the form unavailable until an endpoint is configured', () => {
    mountContact()
    expect(screen.getByText(s.unavailable)).toBeVisible()
    expect(screen.getByRole('button', { name: s.send })).toBeDisabled()
  })
  for (const [label, response] of [
    ['HTTP failure', { ok: false, json: async () => ({ ok: true }) }],
    ['rejected inquiry', { ok: true, json: async () => ({ ok: false }) }],
    [
      'HTML response',
      {
        ok: true,
        json: async () => {
          throw new Error('not JSON')
        },
      },
    ],
  ] as const)
    it(`preserves the inquiry after ${label}`, async () => {
      vi.stubGlobal('fetch', vi.fn().mockResolvedValue(response))
      mountContact('https://contact.example.test/inquiries')
      const user = await fillForm()
      await user.click(screen.getByRole('button', { name: s.send }))
      expect(await screen.findByText(s.failed)).toBeVisible()
      expect(screen.getByLabelText(s.message)).toHaveValue('A collaboration inquiry.')
      expect(screen.queryByText(s.sent)).toBeNull()
    })

  it('clears fields only when the configured service confirms acceptance', async () => {
    const fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ ok: true }) })
    vi.stubGlobal('fetch', fetch)
    mountContact('https://contact.example.test/inquiries')
    const user = await fillForm()
    await user.click(screen.getByRole('button', { name: s.send }))
    expect(await screen.findByText(s.sent)).toBeVisible()
    expect(screen.getByLabelText(s.message)).toHaveValue('')
    expect(fetch).toHaveBeenCalledWith(
      'https://contact.example.test/inquiries',
      expect.objectContaining({
        method: 'POST',
        body: expect.stringContaining('test@example.test'),
      }),
    )
  })
})
