import '@testing-library/jest-dom/vitest'
import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'scrollTo', { value: vi.fn(), writable: true })
  Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', { value: vi.fn(), writable: true })
}
afterEach(() => {
  cleanup()
  if (typeof localStorage !== 'undefined') localStorage.clear()
  vi.unstubAllGlobals()
})
