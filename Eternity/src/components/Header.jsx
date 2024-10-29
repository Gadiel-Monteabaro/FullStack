import React from "react";

const linksNav = [
  { nombre: "nosotros" },
  { nombre: "modelos" },
  { nombre: "galeria" },
  { nombre: "contacto" },
];

export default function Header({ setView }) {
  return (
    <header>
      <nav className="nav">
        <div>
          <button onClick={() => setView("nosotros")}>
            {" "}
            <img
              class="nav__logo"
              src="img/logoRobots.png"
              alt="Logo Eternity"
            />
          </button>
        </div>
        <ul className="nav__home" type="none">
          {linksNav.map((link) => (
            <li key={link.nombre}>
              {" "}
              <button
                className="nav__link"
                onClick={() => setView(link.nombre)}
              >
                {" "}
                <i className="bi bi-globe-central-south-asia"></i>
                <span>{link.nombre}</span>
              </button>{" "}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
