/* ============================================
   VERTEX DIGITAL — Interactive JavaScript
   Custom cursor, 3D tilt, dot grid, animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ========================
  // Custom Cursor
  // ========================
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mouseX = 0, mouseY = 0;
  let dotX = 0, dotY = 0, ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    dotX += (mouseX - dotX) * 0.2;
    dotY += (mouseY - dotY) * 0.2;
    ringX += (mouseX - ringX) * 0.08;
    ringY += (mouseY - ringY) * 0.08;

    dot.style.left = dotX + 'px';
    dot.style.top = dotY + 'px';
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover state for interactive elements
  const hoverTargets = 'a, button, .btn, .card, .service-card, .work-card, .pricing-card, .faq-item, .process-step, input, select, textarea';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.remove('cursor-hover');
    }
  });

  // ========================
  // Scroll Progress Bar
  // ========================
  const scrollBar = document.createElement('div');
  scrollBar.className = 'scroll-progress';
  document.body.appendChild(scrollBar);

  // ========================
  // Header scroll
  // ========================
  const header = document.querySelector('.header');

  function onScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollY / docHeight : 0;

    scrollBar.style.transform = `scaleX(${progress})`;

    if (header) {
      header.classList.toggle('scrolled', scrollY > 50);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ========================
  // Mobile menu
  // ========================
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // ========================
  // Intersection Observer — Reveal animations
  // ========================
  const revealEls = document.querySelectorAll('.reveal, .stagger-children');
  if (revealEls.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));
  }

  // ========================
  // Hero Title Line Reveal
  // ========================
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    setTimeout(() => heroTitle.classList.add('visible'), 200);
  }

  // ========================
  // Counter Animation
  // ========================
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          const duration = 1800;
          const start = performance.now();

          function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            el.textContent = Math.floor(target * eased) + suffix;
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }

  // (Card hover scale is handled by CSS only)

  // ========================
  // Interactive Dot Grid (Hero background)
  // ========================
  const heroCanvas = document.querySelector('.hero-canvas');
  if (heroCanvas) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    heroCanvas.appendChild(canvas);

    let dots = [];
    let heroMouseX = 0, heroMouseY = 0;
    const dotSpacing = 40;
    const dotBaseRadius = 1.2;
    const dotHoverRadius = 3;
    const influenceRadius = 120;

    function initDots() {
      const rect = heroCanvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      dots = [];
      const cols = Math.ceil(canvas.width / dotSpacing);
      const rows = Math.ceil(canvas.height / dotSpacing);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({
            x: c * dotSpacing + dotSpacing / 2,
            y: r * dotSpacing + dotSpacing / 2,
            baseR: dotBaseRadius,
            r: dotBaseRadius,
            targetR: dotBaseRadius,
            opacity: 0.15,
            targetOpacity: 0.15,
          });
        }
      }
    }

    function drawDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const rect = heroCanvas.getBoundingClientRect();
      const mx = heroMouseX - rect.left;
      const my = heroMouseY - rect.top;

      for (const d of dots) {
        const dx = d.x - mx;
        const dy = d.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < influenceRadius) {
          const factor = 1 - dist / influenceRadius;
          d.targetR = dotBaseRadius + (dotHoverRadius - dotBaseRadius) * factor;
          d.targetOpacity = 0.15 + 0.5 * factor;
        } else {
          d.targetR = dotBaseRadius;
          d.targetOpacity = 0.15;
        }

        d.r += (d.targetR - d.r) * 0.12;
        d.opacity += (d.targetOpacity - d.opacity) * 0.12;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${d.opacity})`;
        ctx.fill();
      }

      // Draw lines between close dots that are near mouse
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        if (a.targetR <= dotBaseRadius + 0.2) continue;
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          if (b.targetR <= dotBaseRadius + 0.2) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < dotSpacing * 1.8) {
            const lineOpacity = Math.min(a.opacity, b.opacity) * 0.4;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(drawDots);
    }

    // Listen on the hero section (not the canvas) so overlapping children don't block events
    const heroSection = heroCanvas.closest('.hero') || heroCanvas.parentElement;
    heroSection.addEventListener('mousemove', (e) => {
      heroMouseX = e.clientX;
      heroMouseY = e.clientY;
    });

    // Reset when mouse leaves the hero area
    heroSection.addEventListener('mouseleave', () => {
      heroMouseX = -9999;
      heroMouseY = -9999;
    });

    window.addEventListener('resize', initDots);
    initDots();
    drawDots();
  }

  // ========================
  // Magnetic Buttons
  // ========================
  const magneticBtns = document.querySelectorAll('.btn');
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  // ========================
  // FAQ Accordion
  // ========================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (question && answer) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(i => {
          i.classList.remove('active');
          const a = i.querySelector('.faq-answer');
          if (a) a.style.maxHeight = null;
        });
        if (!isOpen) {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });

  // ========================
  // Smooth scroll for anchor links
  // ========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior:'smooth', block:'start' });
      }
    });
  });

  // ========================
  // Form submission (demo)
  // ========================
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.btn-primary');
      const originalHTML = btn.innerHTML;
      btn.innerHTML = '<span class="btn-text">送信完了しました</span>';
      btn.style.background = '#2563EB';
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = '';
        contactForm.reset();
      }, 3000);
    });
  }

  // ========================
  // Parallax on scroll (subtle)
  // ========================
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (parallaxEls.length > 0) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      parallaxEls.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.1;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const offset = (center - window.innerHeight / 2) * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
    }, { passive: true });
  }

});
