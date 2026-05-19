export default function evidenciasView() {
  return `
    <section id="evidencias" class="section">
      <div class="container">
        <h2 class="section-title">Evidencias Tecnicas</h2>
        <p class="section-lead">Se integra el codigo de etica del ingeniero en informatica y casos reales del area para demostrar responsabilidad profesional y criterio tecnico.</p>
        <div class="evidence-grid">
          <div class="panel">
            <h3>Codigo de etica</h3>
            <div class="code-box">
<span class="comment">// Principios esenciales del ingeniero en informatica</span><br>
<span class="kw">if</span> (codigo == <span class="str">"etica"</span>) {<br>
&nbsp;&nbsp;integridad = <span class="str">true</span>;<br>
&nbsp;&nbsp;confidencialidad = <span class="str">true</span>;<br>
&nbsp;&nbsp;respeto_por_datos = <span class="str">true</span>;<br>
&nbsp;&nbsp;calidad = <span class="str">true</span>;<br>
&nbsp;&nbsp;responsabilidad_social = <span class="str">true</span>;<br>
}<br><br>
<span class="comment">/* No usar conocimiento tecnico para danar, manipular o vulnerar sistemas */</span>
            </div>
          </div>
          <div class="panel">
            <h3>Casos reales en informatica</h3>
            <div class="case-list">
              <div class="case-item">
                <h4>Ransomware en organizaciones</h4>
                <p>La respuesta correcta exige respaldos, segmentacion de red, aislamiento rapido y comunicacion etica con usuarios y clientes.</p>
              </div>
              <div class="case-item">
                <h4>Filtracion de datos por mala configuracion</h4>
                <p>Los errores en permisos cloud muestran la importancia de revisar accesos, cifrado y control de credenciales.</p>
              </div>
              <div class="case-item">
                <h4>Uso irresponsable de herramientas de IA</h4>
                <p>La evidencia tecnica debe respetar privacidad, derechos de autor y calidad de la informacion generada.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
