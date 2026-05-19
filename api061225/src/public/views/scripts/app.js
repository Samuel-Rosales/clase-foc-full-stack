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
      'Seguridad y calidad tecnica',
      'Innovacion con impacto social',
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
});
