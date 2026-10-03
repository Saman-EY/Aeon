// =============================================================================
// AEON — front-end interaction layer (framework-agnostic).
// Exported as initInteractions() so it can be re-armed after every client-side
// route change; each call tears down the listeners it previously attached.
//
// Migrated from public/static/app.js (Hono static asset) so Vite can process
// it and so it can run against React-rendered DOM.
// =============================================================================

// Optional override for the contact form endpoint. Set VITE_CONTACT_ENDPOINT
// (e.g. a form service or your own API) — it defaults to /api/contact, which
// was the Hono route in the previous server-rendered setup.
const CONTACT_ENDPOINT: string =
  import.meta.env.VITE_CONTACT_ENDPOINT ?? "/api/contact";

let teardown: (() => void) | null = null;

export function initInteractions(): () => void {
  if (teardown) teardown();

  const disposers: Array<() => void> = [];
  const on = (
    target: EventTarget | null,
    type: string,
    handler: EventListener,
    options?: AddEventListenerOptions,
  ): void => {
    if (!target) return;
    target.addEventListener(type, handler, options);
    disposers.push(() => target.removeEventListener(type, handler, options));
  };

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------------
     Navigation — scroll state + mobile toggle
     --------------------------------------------------------------------- */
  const nav = document.getElementById("site-nav");
  const navToggle = document.getElementById("nav-toggle");
  const progressEl = document.getElementById("scroll-progress");

  function updateScrollProgress() {
    if (!progressEl) return;
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
    const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressEl.style.width = pct + "%";
  }

  function onScroll() {
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 12);
    updateScrollProgress();
  }
  on(window, "scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle && nav) {
    on(navToggle, "click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.documentElement.style.overflow = isOpen ? "hidden" : "";
    });

    // Close the mobile menu when a link is tapped
    document.querySelectorAll(".nav__mobile a").forEach((a) => {
      on(a, "click", () => {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.documentElement.style.overflow = "";
      });
    });
  }

  /* ---------------------------------------------------------------------
     Scroll reveal — IntersectionObserver driven
     --------------------------------------------------------------------- */
  const revealTargets = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    revealTargets.forEach((el) => io.observe(el));
    disposers.push(() => io.disconnect());
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  // Stagger index within groups
  document.querySelectorAll("[data-reveal-group]").forEach((group) => {
    Array.prototype.forEach.call(group.children, (child: HTMLElement, i: number) => {
      child.style.setProperty("--i", String(i));
    });
  });

  /* ---------------------------------------------------------------------
     Custom cursor dot (desktop / fine pointer only)
     --------------------------------------------------------------------- */
  const cursor = document.getElementById("cursor-dot");
  if (cursor && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    on(window, "mousemove", (event) => {
      const e = event as MouseEvent;
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      cursor.classList.add("is-active");
    });
    on(document, "mouseleave", () => cursor.classList.remove("is-active"));

    const interactiveSelectors =
      'a, button, .eco-node, input, textarea, select, [role="button"]';
    on(document, "mouseover", (event) => {
      const target = (event.target as Element | null)?.closest?.(interactiveSelectors);
      if (target) {
        cursor.style.width = "26px";
        cursor.style.height = "26px";
      }
    });
    on(document, "mouseout", (event) => {
      const target = (event.target as Element | null)?.closest?.(interactiveSelectors);
      if (target) {
        cursor.style.width = "8px";
        cursor.style.height = "8px";
      }
    });
  }

  /* ---------------------------------------------------------------------
     Ecosystem diagram — node selection swaps the detail panel
     --------------------------------------------------------------------- */
  const ecoNodes = document.querySelectorAll(".eco-node");
  if (ecoNodes.length) {
    const activateNode = (id: string | null) => {
      ecoNodes.forEach((n) => {
        n.classList.toggle("is-active", n.getAttribute("data-node") === id);
      });
      document.querySelectorAll<HTMLElement>(".eco-detail-panel").forEach((p) => {
        p.style.display = p.getAttribute("data-panel") === id ? "" : "none";
      });
    };

    ecoNodes.forEach((node) => {
      const id = node.getAttribute("data-node");
      on(node, "click", () => activateNode(id));
      on(node, "keydown", (event) => {
        const e = event as KeyboardEvent;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activateNode(id);
        }
      });
      on(node, "mouseenter", () => activateNode(id));
    });

    activateNode(ecoNodes[0].getAttribute("data-node"));
  }

  /* ---------------------------------------------------------------------
     Contact form — progressive enhancement, posts to CONTACT_ENDPOINT
     --------------------------------------------------------------------- */
  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  if (form) {
    const statusEl = document.getElementById("contact-status");
    const submitBtn = document.getElementById("contact-submit");

    on(form, "submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        organization: formData.get("organization"),
        topic: formData.get("topic"),
        message: formData.get("message"),
      };

      if (submitBtn) submitBtn.setAttribute("disabled", "true");
      if (statusEl) {
        statusEl.textContent = "Sending…";
        statusEl.style.color = "";
      }

      fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json().then((data) => ({ ok: res.ok, data })))
        .then((result) => {
          if (result.ok && result.data.ok) {
            if (statusEl) {
              statusEl.textContent = "Message received. We will respond directly.";
              statusEl.style.color = "var(--c-signal)";
            }
            form.reset();
          } else {
            throw new Error(result.data?.error || "Something went wrong.");
          }
        })
        .catch((err: Error) => {
          if (statusEl) {
            statusEl.textContent =
              err.message || "Unable to send right now — please email us directly.";
            statusEl.style.color = "#e0796b";
          }
        })
        .finally(() => {
          if (submitBtn) submitBtn.removeAttribute("disabled");
        });
    });
  }

  let active = true;
  teardown = () => {
    if (!active) return;
    active = false;
    disposers.forEach((fn) => fn());
  };
  return teardown;
}
