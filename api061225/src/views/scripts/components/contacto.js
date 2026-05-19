export default function contactoView() {
  return `
    <section id="contacto" class="section">
      <div class="container">
        <h2 class="section-title">Contacto</h2>
        <div class="contact-container">
          <div class="panel">
            <h3>Hablemos de tu proyecto</h3>
            <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Si necesitas una plataforma SaaS, sistema empresarial o aplicacion a medida, ESSOFT puede ayudarte a estructurarlo de forma segura y escalable.</p>
            <div style="display:grid; gap:1rem;">
              <div><i class="fas fa-envelope highlight" style="margin-right:10px;"></i><span>hola@essoft.dev</span></div>
              <div><i class="fas fa-map-marker-alt highlight" style="margin-right:10px;"></i><span>Barquisimeto, Venezuela</span></div>
            </div>
          </div>
          <form class="contact-form">
            <div class="input-group">
              <input type="text" class="input-field" required>
              <label class="input-label">Nombre</label>
            </div>
            <div class="input-group">
              <input type="email" class="input-field" required>
              <label class="input-label">Correo</label>
            </div>
            <div class="input-group">
              <textarea class="input-field" rows="5" required></textarea>
              <label class="input-label">Mensaje</label>
            </div>
            <button type="submit" class="hero-btn hover-trigger" style="width:100%;">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  `;
}
