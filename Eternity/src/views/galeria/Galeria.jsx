export default function Galeria() {
  return (
    <main>
      <div class="videoppal">
        <iframe
          className="video"
          src="https://www.youtube-nocookie.com/embed/-gTS9J87W9k?si=u1AYuL3zogrEfELk&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div>
        <div class="title">
          <h4>Innovación Robótica: Asistencia Diaria y Exploración Espacial</h4>
        </div>

        <article className="galeria-contenedor">
          <img src="img/gallery1.png" alt="" />
          <img src="img/gallery2.png" alt="" />
          <img src="img/gallery3.jpg" alt="" />
          <img src="img/gallery4.png" alt="" />
          <img src="img/gallery5.jpg" alt="" />
          <img src="img/gallery6.png" alt="" />
          <img src="img/gallery7.png" alt="" />
          <img src="img/gallery8.png" alt="" />
          <img src="img/gallery9.png" alt="" />
        </article>
      </div>
    </main>
  );
}
