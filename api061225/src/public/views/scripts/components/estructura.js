export default function estructuraView() {
  return `
    <section id="estructura" class="section">
      <div class="container">
        <h2 class="section-title">Estructura Organizativa</h2>
        <p class="section-lead">La empresa opera con una estructura horizontal y ágil, orientada a acelerar el ciclo de vida del desarrollo de software sin perder control técnico ni calidad.</p>
        <div class="org-tree-wrapper panel">
          <svg class="org-svg" aria-hidden="true"></svg>

          <div class="org-tree">
              <div class="org-root org-tooltip-target" data-desc="Dirección General: define la estrategia global, alianzas comerciales y la visión de crecimiento de la empresa.">
              <span class="org-badge org-badge-root">CEO</span>
              <strong>Dirección General</strong>
              <p>Estrategia global, alianzas comerciales y visión a largo plazo.</p>
              <div class="org-meta">
                <span>Estrategia</span>
                <span>Alianzas</span>
                <span>Visión</span>
              </div>
            </div>

            <div class="org-row">
              <div class="org-column">
                <div class="org-branch org-tech org-tooltip-target" data-desc="Dirección de Tecnología: coordina arquitectura, stack tecnológico y calidad técnica de toda la operación.">
                  <span class="org-badge">CTO</span>
                  <strong>Dirección de Tecnología</strong>
                  <p>Arquitectura, stack y calidad técnica.</p>
                  <div class="org-subtitle">Producto + Ingeniería</div>
                </div>

                <div class="org-leaf-grid org-leaf-grid-tech">
                  <div class="org-node org-tooltip-target" data-desc="Backend & Base de Datos: lógica de negocio, APIs, servidores y modelado de datos.">
                    <strong>Backend & Base de Datos</strong>
                    <p>APIs, lógica y datos.</p>
                  </div>
                  <div class="org-node org-tooltip-target" data-desc="Frontend & Mobile: interfaz de usuario, interactividad web y apps multiplataforma.">
                    <strong>Frontend & Mobile</strong>
                    <p>UI, web y móvil.</p>
                  </div>
                  <div class="org-node org-tooltip-target" data-desc="Diseño UI/UX: prototipos, flujos de usuario e identidad visual funcional.">
                    <strong>Diseño UI/UX</strong>
                    <p>Flujos e identidad visual.</p>
                  </div>
                  <div class="org-node org-tooltip-target" data-desc="QA y Soporte Técnico: testing, diagnóstico de errores, mantenimiento y soporte continuo.">
                    <strong>QA y Soporte Técnico</strong>
                    <p>Testing y soporte.</p>
                  </div>
                </div>
              </div>

              <div class="org-column">
                <div class="org-branch org-ops org-tooltip-target" data-desc="Dirección de Operaciones y Ventas: gestión de recursos, relación con clientes, nuevos proyectos y planificación financiera.">
                  <span class="org-badge">COO</span>
                  <strong>Dirección de Operaciones y Ventas</strong>
                  <p>Clientes, recursos y planificación financiera.</p>
                  <div class="org-subtitle">Operaciones + Comercial</div>
                </div>

                <div class="org-leaf-grid org-leaf-grid-ops">
                  <div class="org-node org-tooltip-target" data-desc="Ventas y Relación con Clientes: seguimiento comercial, propuestas y cierre de oportunidades.">
                    <strong>Ventas y Relación con Clientes</strong>
                    <p>Seguimiento y cierre.</p>
                  </div>
                  <div class="org-node org-tooltip-target" data-desc="Operaciones y Proyectos: coordinación, cronogramas, entregas y control de avance.">
                    <strong>Operaciones y Proyectos</strong>
                    <p>Entrega y control.</p>
                  </div>
                  <div class="org-node org-tooltip-target" data-desc="Administración y Recursos: presupuestos, recursos internos y soporte operativo.">
                    <strong>Administración y Recursos</strong>
                    <p>Presupuesto y soporte.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
