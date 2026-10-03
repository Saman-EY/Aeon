// =============================================================================
// AEON — Frontend interactions
// Restrained, intentional motion. No frameworks — vanilla DOM + IntersectionObserver.
// =============================================================================
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------------
     Navigation — scroll state + mobile toggle
     --------------------------------------------------------------------- */
  var nav = document.getElementById('site-nav');
  var navToggle = document.getElementById('nav-toggle');

  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 12) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
    updateScrollProgress();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.documentElement.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile menu when a link is tapped
    var mobileLinks = document.querySelectorAll('.nav__mobile a');
    mobileLinks.forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.documentElement.style.overflow = '';
      });
    });
  }

  /* ---------------------------------------------------------------------
     Scroll progress bar
     --------------------------------------------------------------------- */
  var progressEl = document.getElementById('scroll-progress');
  function updateScrollProgress() {
    if (!progressEl) return;
    var doc = document.documentElement;
    var scrollTop = doc.scrollTop || document.body.scrollTop;
    var scrollHeight = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
    var pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressEl.style.width = pct + '%';
  }

  /* ---------------------------------------------------------------------
     Scroll reveal — IntersectionObserver driven
     --------------------------------------------------------------------- */
  var revealTargets = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Stagger index within groups
  document.querySelectorAll('[data-reveal-group]').forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (child, i) {
      child.style.setProperty('--i', i);
    });
  });

  /* ---------------------------------------------------------------------
     Custom cursor dot (desktop / fine pointer only)
     --------------------------------------------------------------------- */
  var cursor = document.getElementById('cursor-dot');
  if (cursor && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var cx = 0, cy = 0, active = false;
    window.addEventListener('mousemove', function (e) {
      cx = e.clientX; cy = e.clientY;
      cursor.style.left = cx + 'px';
      cursor.style.top = cy + 'px';
      if (!active) { active = true; cursor.classList.add('is-active'); }
    });
    document.addEventListener('mouseleave', function () {
      cursor.classList.remove('is-active');
    });

    var interactiveSelectors = 'a, button, .eco-node, input, textarea, select, [role="button"]';
    document.addEventListener('mouseover', function (e) {
      var target = e.target.closest ? e.target.closest(interactiveSelectors) : null;
      if (target) {
        cursor.style.width = '26px';
        cursor.style.height = '26px';
      }
    });
    document.addEventListener('mouseout', function (e) {
      var target = e.target.closest ? e.target.closest(interactiveSelectors) : null;
      if (target) {
        cursor.style.width = '8px';
        cursor.style.height = '8px';
      }
    });
  }

  /* ---------------------------------------------------------------------
     Ecosystem diagram — node selection swaps detail panel
     --------------------------------------------------------------------- */
  var ecoNodes = document.querySelectorAll('.eco-node');
  if (ecoNodes.length) {
    function activateNode(id) {
      ecoNodes.forEach(function (n) {
        n.classList.toggle('is-active', n.getAttribute('data-node') === id);
      });
      document.querySelectorAll('.eco-detail-panel').forEach(function (p) {
        p.style.display = p.getAttribute('data-panel') === id ? '' : 'none';
      });
    }
    ecoNodes.forEach(function (node) {
      var id = node.getAttribute('data-node');
      node.addEventListener('click', function () { activateNode(id); });
      node.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activateNode(id);
        }
      });
      node.addEventListener('mouseenter', function () { activateNode(id); });
    });
    // Activate first node by default
    var first = ecoNodes[0].getAttribute('data-node');
    activateNode(first);
  }

  /* ---------------------------------------------------------------------
     Contact form — progressive enhancement, posts to /api/contact
     --------------------------------------------------------------------- */
  var form = document.getElementById('contact-form');
  if (form) {
    var statusEl = document.getElementById('contact-status');
    var submitBtn = document.getElementById('contact-submit');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var formData = new FormData(form);
      var payload = {
        name: formData.get('name'),
        email: formData.get('email'),
        organization: formData.get('organization'),
        topic: formData.get('topic'),
        message: formData.get('message'),
      };

      if (submitBtn) submitBtn.setAttribute('disabled', 'true');
      if (statusEl) { statusEl.textContent = 'Sending…'; statusEl.style.color = ''; }

      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
        .then(function (res) { return res.json().then(function (data) { return { ok: res.ok, data: data }; }); })
        .then(function (result) {
          if (result.ok && result.data.ok) {
            if (statusEl) {
              statusEl.textContent = 'Message received. We will respond directly.';
              statusEl.style.color = 'var(--c-signal)';
            }
            form.reset();
          } else {
            throw new Error((result.data && result.data.error) || 'Something went wrong.');
          }
        })
        .catch(function (err) {
          if (statusEl) {
            statusEl.textContent = err.message || 'Unable to send right now — please email us directly.';
            statusEl.style.color = '#e0796b';
          }
        })
        .finally(function () {
          if (submitBtn) submitBtn.removeAttribute('disabled');
        });
    });
  }
})();
