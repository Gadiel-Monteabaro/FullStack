export default function Carrousel() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="img/carousel1.jpg"
            class="d-block w-100"
            alt="Imagene de Robot"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Robot ROBLOX</h5>
            <p>Robot de mantenimiento industrial.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="img/carousel2.jpg"
            class="d-block w-100"
            alt="Imagen de Planeta"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Exploracion espacial</h5>
            <p>Conocer el universo es uno de nuestros objetivos.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="img/carousel3.png"
            class="d-block w-100"
            alt="Imagen de Manos"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Inteligencia Artificial</h5>
            <p>Estar actualizados para brindar la mejor calidad de servicio.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
