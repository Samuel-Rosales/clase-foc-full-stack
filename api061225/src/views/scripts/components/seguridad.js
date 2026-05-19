export default function seguridadView() {
  return `
    <section id="seguridad" class="section">
      <div class="container">
        <h2 class="section-title">Seguridad y Manejo de Datos</h2>
        <p class="section-lead">La protección de datos es parte de la calidad del producto. ESSOFT prioriza prácticas seguras y manejo ético de credenciales.</p>
        <div class="security-grid">
          <div class="panel">
            <h3>Protocolos de seguridad</h3>
            <div class="protocol-list">
              <div class="protocol-item"><i class="fas fa-lock"></i><div><strong>Contraseñas robustas</strong><p>Longitud minima, combinacion de caracteres y prohibicion de claves repetidas o predecibles.</p></div></div>
              <div class="protocol-item"><i class="fas fa-shield-halved"></i><div><strong>Almacenamiento seguro</strong><p>Hashing con salt, nunca guardar contraseñas en texto plano ni compartirlas por canales inseguros.</p></div></div>
              <div class="protocol-item"><i class="fas fa-user-shield"></i><div><strong>Acceso por roles</strong><p>Principio de minimo privilegio y revisiones periodicas de permisos sobre sistemas y datos.</p></div></div>
              <div class="protocol-item"><i class="fas fa-database"></i><div><strong>Respaldo y recuperacion</strong><p>Backups automatizados, cifrados y pruebas de restauracion para continuidad operativa.</p></div></div>
            </div>
          </div>
          <div class="panel">
            <h3>Análisis de vulnerabilidad ética</h3>
            <p>Una vulnerabilidad no solo es técnica; también puede ser ética cuando el sistema permite abusos, recopilación excesiva de datos o falta de consentimiento.</p>
            <ul style="display:grid; gap:0.85rem; margin-top:1rem;">
              <li>Revisar el impacto real sobre usuarios antes de desplegar una funcionalidad.</li>
              <li>Evitar patrones oscuros en formularios, consentimientos o manejo de datos.</li>
              <li>Documentar riesgos, reportar fallos y actuar con transparencia.</li>
              <li>Aplicar pruebas de seguridad con autorización y alcance definido.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}
