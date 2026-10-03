import { jsxRenderer } from 'hono/jsx-renderer'
import { site } from './data/content'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/static/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;540;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link href="/static/style.css" rel="stylesheet" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={site.legalName} />
      </head>
      <body>
        <a href="#main" class="skip-link">Skip to content</a>
        <div class="scroll-progress" id="scroll-progress" aria-hidden="true"></div>
        <div class="cursor-dot" id="cursor-dot" aria-hidden="true"></div>
        {children}
        <script src="/static/app.js" defer></script>
      </body>
    </html>
  )
})
