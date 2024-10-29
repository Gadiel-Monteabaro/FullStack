import { useState } from "react";
import Header from "./components/Header";
import Contact from "./views/contact/Contact";
import Galeria from "./views/galeria/Galeria";
import Modelos from "./views/modelos/Modelos";
import Nosotros from "./views/Nosotros/Nosotros";

function App() {
  const [view, setView] = useState("nosotros");

  const renderView = () => {
    switch (view) {
      case "nosotros":
        return <Nosotros setView={setView} />;
      case "modelos":
        return <Modelos />;
      case "galeria":
        return <Galeria />;
      case "contacto":
        return <Contact />;
      default:
        return <Nosotros />;
    }
  };

  return (
    <>
      <Header setView={setView} />
      {renderView()}
      <footer>
        <div>
          <h3 class="footer">
            Privacidad | Legal | Actualizar el consentimiento de cookies | No
            vender ni compartir información | © Eternity LM Derechos reservados.
          </h3>
          <a href="https://www.instagram.com" target="_blank">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://x.com" target="_blank">
            <i class="bi bi-twitter-x"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
