// Persistent page chrome rendered outside the routed pages. These three
// elements (skip link, scroll-progress bar, custom cursor dot) are targeted by
// src/lib/interactions.ts and styled in src/styles/style.css. In the previous
// Hono setup they were emitted by the server renderer, which no longer exists.
export function SiteChrome() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="scroll-progress" id="scroll-progress" aria-hidden="true" />
      <div className="cursor-dot" id="cursor-dot" aria-hidden="true" />
    </>
  );
}
