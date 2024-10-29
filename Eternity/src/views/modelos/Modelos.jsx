import { cardModel } from "../../data/modelData";
export default function Modelos() {
  return (
    <div>
      <section id="modelos">
        {cardModel.map((card) => (
          <article className="sombraContainer radiusImage">
            <div id="backgroundRobots">
              <img
                className="logoRoot"
                src="img/logoRobots.png"
                alt="Logo Eternity"
              />
              <img className="imgRadius" src={card.src} alt="Imagen de Robot" />
            </div>
            <div>
              <h2>{card.nombre}</h2>
              <p>{card.descripcion}</p>
              <button>Ver más</button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
