// ═══════════════════════════════════════════
//  SHARED NAV HTML
// ═══════════════════════════════════════════
const NAV_HTML = `
<nav id="main-nav" class="on-video">
  <a href="index.html" class="nav-logo">
    <div class="nav-logo-mark">VG</div>
    <div class="nav-logo-info">
      <span class="nav-logo-name">International SG Pte Ltd</span>
      <span class="nav-logo-sub">Architecture · Structure · MEPF</span>
    </div>
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="disciplines.html">Disciplines</a></li>
    <li><a href="specialisms.html">Specialisms</a></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a href="insights.html">Insights</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <a href="contact.html" class="nav-cta">Request a Consultation</a>
</nav>`;

// ═══════════════════════════════════════════
//  TRUST BAR HTML
// ═══════════════════════════════════════════
const TRUST_BAR_HTML = `
<div class="trust-bar">
  <div class="trust-bar-inner">
    <span class="trust-label">Accredited</span>
    <div class="trust-divider"></div>
    <span class="trust-item">ISO 19650 BIM</span>
    <span class="trust-item">LEED AP (BD+C)</span>
    <span class="trust-item">BREEAM Assessor</span>
    <span class="trust-item">CIBSE Chartered</span>
    <span class="trust-item">ASHRAE Member</span>
    <span class="trust-item">Uptime Institute</span>
    <span class="trust-item">BCA Green Mark</span>
    <span class="trust-item">ISO 9001 Quality</span>
    <span class="trust-item">NFPA</span>
    <span class="trust-item">FM Global</span>
    <span class="trust-item">WELL AP</span>
    <span class="trust-item">Green Star</span>
    <span class="trust-item">IGBC</span>
  </div>
</div>`;

// ═══════════════════════════════════════════
//  FOOTER HTML
// ═══════════════════════════════════════════
const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div>
      <div class="footer-brand">VG International SG Pte Ltd</div>
      <div class="footer-tag">Architecture · Structural · MEPF · Singapore · Global</div>
      <div class="footer-tagline">"Engineering the Future, Built on Trust."</div>
      <div class="footer-info body-text mt1">
        18 Robinson Road, #09-01<br>
        Singapore 048547<br>
        consult@vginternational.com.sg
      </div>
    </div>
    <div>
      <div class="footer-col-title">Disciplines</div>
      <a class="footer-link" href="disciplines.html">Architecture</a>
      <a class="footer-link" href="disciplines.html#structural">Structural Engineering</a>
      <a class="footer-link" href="disciplines.html#mepf">MEPF Engineering</a>
    </div>
    <div>
      <div class="footer-col-title">Specialisms</div>
      <a class="footer-link" href="specialisms.html#netzero">Net Zero Buildings</a>
      <a class="footer-link" href="specialisms.html#datacenter">Data Centres</a>
      <a class="footer-link" href="specialisms.html#coldchain">Cold Chain</a>
      <a class="footer-link" href="specialisms.html#retrofit">Retrofits</a>
      <a class="footer-link" href="specialisms.html#owners">Owner's Engineering</a>
    </div>
    <div>
      <div class="footer-col-title">Global Markets</div>
      <a class="footer-link" href="about.html#markets">Southeast Asia</a>
      <a class="footer-link" href="about.html#markets">South Asia</a>
      <a class="footer-link" href="about.html#markets">GCC &amp; Middle East</a>
      <a class="footer-link" href="about.html#markets">North America</a>
      <a class="footer-link" href="about.html#markets">UK &amp; Europe</a>
      <a class="footer-link" href="about.html#markets">Australia &amp; NZ</a>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-legal">© 2025 VG International SG Pte Ltd. All rights reserved. Registered in Singapore.</div>
    <div class="footer-creds">
      <span class="cred">ISO 19650</span>
      <span class="cred">LEED AP</span>
      <span class="cred">CIBSE</span>
      <span class="cred">ASHRAE</span>
      <span class="cred">BCA Green Mark</span>
      <span class="cred">NFPA</span>
    </div>
  </div>
</footer>`;

// ═══════════════════════════════════════════
//  INJECT + INIT
// ═══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {

  // Inject nav
  const navSlot = document.getElementById('nav-placeholder');
  if (navSlot) navSlot.outerHTML = NAV_HTML;

  // Inject footer
  const footerSlot = document.getElementById('footer-placeholder');
  if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;

  // Inject trust bar
  const trustSlot = document.getElementById('trust-placeholder');
  if (trustSlot) trustSlot.outerHTML = TRUST_BAR_HTML;

  // Active nav link
  let page = window.location.pathname.split('/').pop() || 'index.html';
  if (page === '') page = 'index.html'; // Handle directory root
  
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === 'index.html' && href === './')) {
      a.classList.add('active');
    }
  });

  // ── NAV SCROLL BEHAVIOUR ──────────────────
  const nav = document.getElementById('main-nav');

  // Determine if first section is a video hero
  const firstSection = document.querySelector('.video-hero');
  const hasVideoHero = !!firstSection;

  function updateNav() {
    if (!nav) return;
    const scrolled = window.scrollY > 80;
    if (scrolled) {
      nav.classList.add('scrolled');
      nav.classList.remove('on-video');
    } else {
      nav.classList.remove('scrolled');
      if (hasVideoHero) nav.classList.add('on-video');
      else nav.classList.remove('on-video');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // ── SCROLL PROGRESS BAR ──────────────────
  const progress = document.getElementById('scroll-progress');
  if (progress) {
    window.addEventListener('scroll', () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (window.scrollY / total * 100) + '%';
    }, { passive: true });
  }

  // ── CUSTOM CURSOR ────────────────────────
  const dot = document.createElement('div');
  dot.className = 'custom-cursor';
  const ring = document.createElement('div');
  ring.className = 'cursor-follower';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx - 3.5}px, ${my - 3.5}px)`;
  });

  (function animateCursor() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = `translate(${rx - 15}px, ${ry - 15}px)`;
    requestAnimationFrame(animateCursor);
  })();

  document.querySelectorAll('a, button, .spec-card, .proj-card, .mag-image').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('active'));
    el.addEventListener('mouseleave', () => ring.classList.remove('active'));
  });

  // ── SCROLL REVEAL ────────────────────────
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings
        const siblings = entry.target.parentElement?.querySelectorAll('.reveal-init:not(.revealed)');
        if (siblings && siblings.length > 1) {
          let delay = 0;
          siblings.forEach(sib => {
            if (!sib.classList.contains('revealed')) {
              setTimeout(() => sib.classList.add('revealed'), delay);
              delay += 80;
            }
          });
        } else {
          entry.target.classList.add('revealed');
        }
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-init').forEach(el => revealObserver.observe(el));

  // ── STAT COUNTERS ────────────────────────
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-count]').forEach(el => {
          const target = parseFloat(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          const isDecimal = target % 1 !== 0;
          const duration = 1800;
          const start = performance.now();

          function tick(now) {
            const pct = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - pct, 3);
            const val = target * ease;
            el.textContent = (isDecimal ? val.toFixed(1) : Math.round(val)) + suffix;
            if (pct < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.hero-stats-bar, .stats-strip').forEach(el => statObserver.observe(el));

  // ── IMAGE PARALLAX ON SCROLL ─────────────
  const magImages = document.querySelectorAll('.mag-image img, .video-hero-bg video');
  window.addEventListener('scroll', () => {
    magImages.forEach(img => {
      const rect = img.closest('.mag-image, .video-hero')?.getBoundingClientRect();
      if (!rect) return;
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const offset = (rect.top / window.innerHeight) * 20;
      img.style.transform = `scale(1.08) translateY(${offset}px)`;
    });
  }, { passive: true });

  // ── FILTER BUTTONS (PROJECTS PAGE) ───────
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

});
