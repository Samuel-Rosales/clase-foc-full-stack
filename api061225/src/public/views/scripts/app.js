import headerView from './components/header.js';
import heroView from './components/hero.js';
import empresaView from './components/empresa.js';
import estructuraView from './components/estructura.js';
import evidenciasView from './components/evidencias.js';
import seguridadView from './components/seguridad.js';
import innovacionView from './components/innovacion.js';
import reflexionView from './components/reflexion.js';
import contactoView from './components/contacto.js';
import footerView from './components/footer.js';

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;

const appTemplate = `
  <div id="preloader">
    <h2 class="loader-text">INICIALIZANDO ESSOFT...</h2>
    <div class="loader-bar"><div class="loader-progress"></div></div>
  </div>

  <div class="cursor-dot"></div>
  <div class="cursor-outline"></div>

  <div id="canvas-container"><canvas id="neuro-canvas"></canvas></div>
  <div id="header-slot"></div>
  <main id="main-slot"></main>
  <div id="footer-slot"></div>
`;

document.body.innerHTML = appTemplate;
document.getElementById('header-slot').innerHTML = headerView();
document.getElementById('main-slot').innerHTML = [
  heroView(),
  empresaView(),
  estructuraView(),
  evidenciasView(),
  seguridadView(),
  innovacionView(),
  reflexionView(),
  contactoView(),
].join('');
document.getElementById('footer-slot').innerHTML = footerView();

document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
      initTypewriter();
    }, 500);
  }, 1400);

  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');
  const hoverTriggers = document.querySelectorAll('a, button, .hover-trigger');

  window.addEventListener('mousemove', (e) => {
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
    cursorOutline.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 450, fill: 'forwards' });
  });

  hoverTriggers.forEach((trigger) => {
    trigger.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    trigger.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
  });

  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
  });

  const canvas = document.getElementById('neuro-canvas');
  const ctx = canvas.getContext('2d');
  let particlesArray = [];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  });

  const mouse = { x: null, y: null, radius: 140 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  class Particle {
    constructor(x, y, dx, dy, size) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.size = size;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = '#00f3ff';
      ctx.fill();
    }

    update() {
      if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
      if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x) this.x += 5;
          if (mouse.x > this.x) this.x -= 5;
          if (mouse.y < this.y) this.y += 5;
          if (mouse.y > this.y) this.y -= 5;
        }
      }

      this.x += this.dx;
      this.y += this.dy;
      this.draw();
    }
  }

  function initTypewriter() {
    const textElement = document.querySelector('.typewriter');
    const words = [
      'Desarrollo SaaS escalable',
      'Arquitectura full-stack',
      'Seguridad y calidad técnica',
      'Innovación con impacto social',
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 45 : 95;

      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1800;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 400;
      }

      setTimeout(type, typeSpeed);
    }

    type();
  }

  function initParticles() {
    particlesArray = [];
    const numberOfParticles = Math.max(50, Math.floor((canvas.width * canvas.height) / 12000));
    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 2 + 1;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const dx = Math.random() * 0.7 - 0.35;
      const dy = Math.random() * 0.7 - 0.35;
      particlesArray.push(new Particle(x, y, dx, dy, size));
    }
  }

  function connect() {
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        const dx = particlesArray[a].x - particlesArray[b].x;
        const dy = particlesArray[a].y - particlesArray[b].y;
        const distance = dx * dx + dy * dy;
        if (distance < (canvas.width / 7) * (canvas.height / 7)) {
          const opacity = 1 - distance / 20000;
          ctx.strokeStyle = `rgba(0, 243, 255, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach((particle) => particle.update());
    connect();
  }

  initParticles();
  animate();

  initOrgChart();

  if (gsap && ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero .eyebrow, .hero-title, .typewriter, .hero-copy, .hero-actions', {
      opacity: 0,
      y: 24,
      duration: 0.8,
      stagger: 0.14,
      ease: 'power3.out',
    });

    gsap.from('.section-title, .section-lead', {
      scrollTrigger: { trigger: '.section-title', start: 'top 85%' },
      opacity: 0,
      y: 26,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
    });

    gsap.utils.toArray('.stack-item').forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: { trigger: item, start: 'top 85%' },
        opacity: 0,
        x: -32,
        duration: 0.7,
        delay: index * 0.03,
        ease: 'power3.out',
      });
    });

    gsap.utils.toArray('.value-card').forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: { trigger: item, start: 'top 85%' },
        opacity: 0,
        y: 34,
        scale: 0.96,
        duration: 0.7,
        delay: index * 0.05,
        ease: 'power3.out',
      });
    });

    gsap.utils.toArray('.service-card').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 85%' },
        opacity: 0,
        y: 42,
        rotateX: 10,
        duration: 0.8,
        delay: index * 0.06,
        ease: 'power3.out',
      });
    });

    gsap.utils.toArray('.protocol-item, .case-item, .org-node').forEach((item) => {
      gsap.from(item, {
        scrollTrigger: { trigger: item, start: 'top 88%' },
        opacity: 0,
        y: 22,
        duration: 0.65,
        ease: 'power3.out',
      });
    });

    gsap.from('.contact-container .panel, .contact-form', {
      scrollTrigger: { trigger: '#contacto', start: 'top 82%' },
      opacity: 0,
      y: 28,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
    });

    gsap.from('.org-root, .org-branch, .org-node', {
      scrollTrigger: { trigger: '#estructura', start: 'top 80%' },
      opacity: 0,
      y: 24,
      duration: 0.7,
      stagger: 0.06,
      ease: 'power3.out',
    });

    gsap.to('.org-line', {
      scrollTrigger: { trigger: '#estructura', start: 'top 80%' },
      strokeDashoffset: 0,
      duration: 1.6,
      stagger: 0.08,
      ease: 'power2.out',
    });
  }

  function initOrgChart() {
    const wrapper = document.querySelector('.org-tree-wrapper');
    const svg = document.querySelector('.org-svg');
    const tooltip = document.querySelector('.org-tooltip') || createTooltip();
    const targets = document.querySelectorAll('.org-tooltip-target');

    if (!wrapper || !svg) return;

    const ns = 'http://www.w3.org/2000/svg';

    function clearSvg() {
      while (svg.firstChild) svg.removeChild(svg.firstChild);
    }

    function addLine(x1, y1, x2, y2, cls) {
      const line = document.createElementNS(ns, 'line');
      line.setAttribute('x1', x1);
      line.setAttribute('y1', y1);
      line.setAttribute('x2', x2);
      line.setAttribute('y2', y2);
      line.setAttribute('class', `org-line ${cls}`);
      svg.appendChild(line);
      return line;
    }

    function centerOf(el) {
      const wrapRect = wrapper.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      return {
        x: rect.left - wrapRect.left + rect.width / 2,
        y: rect.top - wrapRect.top + rect.height / 2,
        top: rect.top - wrapRect.top,
        bottom: rect.bottom - wrapRect.top,
        left: rect.left - wrapRect.left,
        right: rect.right - wrapRect.left,
      };
    }

    function buildLines() {
      clearSvg();
      const root = document.querySelector('.org-root');
      const branches = document.querySelectorAll('.org-branch');
      const columns = document.querySelectorAll('.org-column');
      if (!root || branches.length < 2 || columns.length < 2) return;

      const rootCenter = centerOf(root);
      const branchCenters = [...branches].map(centerOf);
      const left = branchCenters[0];
      const right = branchCenters[1];
      const rowTop = Math.min(left.top, right.top);
      const rowBottom = Math.max(left.bottom, right.bottom);
      const splitY = rootCenter.bottom + 24;
      const branchY = rowTop - 22;

      addLine(rootCenter.x, rootCenter.bottom, rootCenter.x, splitY, 'org-line-main');
      addLine(left.x, splitY, right.x, splitY, 'org-line-main');
      addLine(left.x, splitY, left.x, branchY, 'org-line-primary');
      addLine(right.x, splitY, right.x, branchY, 'org-line-secondary');

      columns.forEach((column, index) => {
        const branch = column.querySelector('.org-branch');
        const teamNodes = column.querySelectorAll('.org-leaf-grid .org-node');
        if (!teamNodes.length) return;

        const branchCenter = centerOf(branch);
        const teamCenters = [...teamNodes].map(centerOf);
        const teamTop = Math.min(...teamCenters.map((c) => c.top));
        const teamBottom = Math.max(...teamCenters.map((c) => c.bottom));
        const teamLineY = teamTop - 14;
        const colorClass = index === 0 ? 'org-line-primary' : 'org-line-secondary';

        addLine(branchCenter.x, branchCenter.bottom, branchCenter.x, teamLineY, colorClass);
        addLine(teamCenters[0].x, teamLineY, teamCenters[teamCenters.length - 1].x, teamLineY, colorClass);
        addLine(branchCenter.x, branchCenter.bottom, teamCenters[Math.floor(teamCenters.length / 2)].x, teamLineY, colorClass);

        teamCenters.forEach((c) => {
          addLine(c.x, teamLineY, c.x, c.top, colorClass);
        });
      });

      svg.setAttribute('viewBox', `0 0 ${wrapper.clientWidth} ${Math.max(rowBottom + 60, wrapper.clientHeight)}`);
      svg.setAttribute('preserveAspectRatio', 'none');
      svg.setAttribute('width', wrapper.clientWidth);
      svg.setAttribute('height', Math.max(rowBottom + 60, wrapper.clientHeight));
    }

    function createTooltip() {
      const el = document.createElement('div');
      el.className = 'org-tooltip';
      document.body.appendChild(el);
      return el;
    }

    function showTooltip(node, event) {
      const desc = node.getAttribute('data-desc');
      if (!desc) return;
      tooltip.textContent = desc;
      tooltip.classList.add('show');
      const padding = 16;
      const width = tooltip.offsetWidth || 280;
      const height = tooltip.offsetHeight || 80;
      let left = event.clientX + 18;
      let top = event.clientY + 18;
      if (left + width + padding > window.innerWidth) left = event.clientX - width - 18;
      if (top + height + padding > window.innerHeight) top = event.clientY - height - 18;
      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;
    }

    function hideTooltip() {
      tooltip.classList.remove('show');
    }

    buildLines();
    window.addEventListener('resize', buildLines);
    window.addEventListener('scroll', buildLines, { passive: true });

    targets.forEach((node) => {
      node.addEventListener('mouseenter', (event) => showTooltip(node, event));
      node.addEventListener('mousemove', (event) => showTooltip(node, event));
      node.addEventListener('mouseleave', hideTooltip);
    });
  }
});
