import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App'
import './styles/base.css'
import './styles/site.css'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Optional static builds hydrate their existing HTML; normal Vite builds mount a SPA.
if (root.dataset.prerendered === window.location.pathname) hydrateRoot(root, app)
else createRoot(root).render(app)
