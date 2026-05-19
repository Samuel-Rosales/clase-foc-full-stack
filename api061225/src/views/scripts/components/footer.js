export default function footerView() {
  return `
    <footer>
      <div class="container">
        <div class="social-links">
          <a href="#" class="social-icon hover-trigger"><i class="fab fa-github"></i></a>
          <a href="#" class="social-icon hover-trigger"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="social-icon hover-trigger"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon hover-trigger"><i class="fab fa-instagram"></i></a>
        </div>
        <p style="font-size:0.8rem; color:var(--text-muted);">
          &copy; 2025 ESSOFT. Portafolio empresarial inspirado en DevCore Solutions.<br>
          Hecho con <i class="fas fa-bolt highlight"></i> y enfoque técnico.
        </p>
      </div>
    </footer>
  `;
}
