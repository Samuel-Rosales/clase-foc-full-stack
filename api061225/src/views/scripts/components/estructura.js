export default function estructuraView() {
  return `
    <section id="estructura" class="section">
      <div class="container">
        <h2 class="section-title">Estructura Organizativa</h2>
        <p class="section-lead">La empresa opera con una estructura horizontal y agil, orientada a acelerar el ciclo de vida del desarrollo de software sin perder control tecnico ni calidad.</p>
        <div class="panel org-chart">
          <div class="org-node">
            <strong>Direccion General (CEO)</strong>
            Estrategia global, alianzas comerciales y vision a largo plazo.
          </div>
          <div class="org-node">
            <strong>Direccion de Tecnologia (CTO)</strong>
            Arquitectura de sistemas, stack tecnologico y supervision de calidad tecnica.
          </div>
          <div class="org-children">
            <div class="org-node">
              <strong>Desarrollo Backend & Base de Datos</strong>
              Logica de negocio, APIs, servidores y modelado de datos.
            </div>
            <div class="org-node">
              <strong>Frontend & Mobile</strong>
              Interfaz de usuario, interactividad web y apps multiplataforma.
            </div>
            <div class="org-node">
              <strong>Diseño UI/UX</strong>
              Prototipos, flujos de usuario e identidad visual funcional.
            </div>
            <div class="org-node">
              <strong>QA y Soporte Tecnico</strong>
              Testing, diagnostico de errores, mantenimiento y soporte continuo.
            </div>
          </div>
          <div class="org-node">
            <strong>Direccion de Operaciones y Ventas (COO)</strong>
            Gestion de recursos, relacion con clientes, nuevos proyectos y planificacion financiera.
          </div>
        </div>
      </div>
    </section>
  `;
}
