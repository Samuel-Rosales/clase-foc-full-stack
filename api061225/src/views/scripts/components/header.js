export default function headerView() {
  return `
    <header id="header">
      <div class="container">
        <nav>
          <a href="#inicio" class="logo">ESSOFT<span class="highlight">.DEV</span></a>
          <div class="hamburger"><i class="fas fa-bars"></i></div>
          <ul class="nav-links">
            <li><a href="#inicio" class="nav-link active">Inicio</a></li>
            <li><a href="#empresa" class="nav-link">Empresa</a></li>
            <li><a href="#estructura" class="nav-link">Estructura</a></li>
            <li><a href="#evidencias" class="nav-link">Evidencias</a></li>
            <li><a href="#seguridad" class="nav-link">Seguridad</a></li>
            <li><a href="#innovacion" class="nav-link">Innovación</a></li>
            <li><a href="#reflexion" class="nav-link">Reflexión</a></li>
            <li><a href="#contacto" class="nav-link">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}
