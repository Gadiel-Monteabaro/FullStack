import Carrousel from "../../components/Carrousel";

export default function Nosotros() {
  return (
    <main>
      {" "}
      <a href="proyectoUserDesign/userDesign.html">
        <img
          id="imgUserDesign"
          src="img/userDesign.png"
          alt="Diseña tu propio robot"
        />
      </a>
      <Carrousel />
      <div>
        <section id="nosotros">
          <h1>Eternity</h1>
          <p>
            En Eternity, transformamos la automatización para tu hogar, tu
            trabajo y más allá. Fabricamos robots con inteligencia artificial de
            última generación, diseñados para simplificar tareas diarias,
            optimizar procesos laborales y llevar a cabo investigaciones
            avanzadas en salud. Nuestra tecnología no solo mejora tu vida
            cotidiana, sino que también abre puertas a exploraciones
            planetarias, enviando robots para misiones espaciales pioneras.
            Descubre cómo nuestros innovadores productos pueden revolucionar tu
            mundo y explorar nuevos horizontes.
          </p>
        </section>
      </div>
      <div class="socios">
        <h2>Socios de Eternity</h2>
        <a href="https://open.spotify.com/intl-es" target="_blank">
          <img src="img/socio1.png" alt="spotify" />
        </a>
        <a href="https://www.spacex.com" target="_blank">
          <img src="img/socio2.png" alt="spacex" />
        </a>
        <a href="https://www.mercadolibre.com.ar" target="_blank">
          <img src="img/socio3.png" alt="mercado libre" />
        </a>
        <a href="https://www.apple.com" target="_blank">
          <img src="img/socio4.png" alt="utn" />
        </a>
        <a href="https://www.ericsson.com/en" target="_blank">
          <img src="img/socio5.png" alt="ericsson" />
        </a>
        <a href="https://www.nasa.gov" target="_blank">
          <img src="img/socio6.png" alt="nasa" />
        </a>
        <a href="https://www.globant.com" target="_blank">
          <img src="img/socio7.png" alt="globant" />
        </a>
      </div>
    </main>
  );
}
