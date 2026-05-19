export default function seguridadView() {
  return `
    <section id="seguridad" class="section">
      <div class="container">
        <h2 class="section-title">Seguridad y Manejo de Datos</h2>
        <p class="section-lead">La protección de datos es parte de la calidad del producto. ESSOFT prioriza prácticas seguras y manejo ético de credenciales.</p>
        <div class="security-overview panel">
          <div class="security-overview-copy">
            <span class="eyebrow">Marco de protección</span>
            <h3>La seguridad no es un complemento; es una condición de diseño.</h3>
            <p>Las decisiones de acceso, resguardo y uso de datos se definen con criterio preventivo para reducir exposición, evitar abusos y sostener la confianza del usuario.</p>
          </div>
          <div class="security-overview-stats">
            <div class="security-stat"><strong>01</strong><div><h4>Prevención</h4><p>Controles antes del despliegue y validaciones continuas.</p></div></div>
            <div class="security-stat"><strong>02</strong><div><h4>Trazabilidad</h4><p>Registro claro de accesos, cambios y responsabilidades.</p></div></div>
            <div class="security-stat"><strong>03</strong><div><h4>Recuperación</h4><p>Respaldo y restauración para continuidad operativa.</p></div></div>
          </div>
        </div>
        <div class="security-grid">
          <div class="panel security-panel">
            <h3>Protocolos de seguridad</h3>
            <div class="protocol-list protocol-list-compact">
              <article class="protocol-item"><i class="fas fa-lock"></i><div><span class="protocol-tag">Accesos</span><strong>Contraseñas robustas</strong><p>Longitud mínima, combinación de caracteres y prohibición de claves repetidas o predecibles.</p></div></article>
              <article class="protocol-item"><i class="fas fa-shield-halved"></i><div><span class="protocol-tag">Custodia</span><strong>Almacenamiento seguro</strong><p>Hashing con salt, nunca guardar contraseñas en texto plano ni compartirlas por canales inseguros.</p></div></article>
              <article class="protocol-item"><i class="fas fa-user-shield"></i><div><span class="protocol-tag">Gobierno</span><strong>Acceso por roles</strong><p>Principio de mínimo privilegio y revisiones periódicas de permisos sobre sistemas y datos.</p></div></article>
              <article class="protocol-item"><i class="fas fa-database"></i><div><span class="protocol-tag">Continuidad</span><strong>Respaldo y recuperación</strong><p>Backups automatizados, cifrados y pruebas de restauración para continuidad operativa.</p></div></article>
            </div>
          </div>
          <div class="panel security-ethics-panel">
            <h3>Análisis de vulnerabilidad ética</h3>
            <p>Una vulnerabilidad no solo es técnica; también puede ser ética cuando el sistema permite abusos, recopilación excesiva de datos o falta de consentimiento.</p>
            <div class="ethics-checklist">
              <div class="ethics-item"><span>01</span><div><strong>Impacto sobre usuarios</strong><p>Revisar consecuencias reales antes de desplegar una funcionalidad.</p></div></div>
              <div class="ethics-item"><span>02</span><div><strong>Diseño transparente</strong><p>Evitar patrones oscuros en formularios, consentimientos o manejo de datos.</p></div></div>
              <div class="ethics-item"><span>03</span><div><strong>Gestión responsable</strong><p>Documentar riesgos, reportar fallos y actuar con transparencia.</p></div></div>
              <div class="ethics-item"><span>04</span><div><strong>Pruebas autorizadas</strong><p>Aplicar pruebas de seguridad con autorización y alcance definido.</p></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
