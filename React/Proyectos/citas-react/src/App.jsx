import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

// Props en React __ Variables o funciones de otros componentes

// Props en React __ Forma de reutilzar variables.

// Props en React __ Los props se pasan del padre al hijo, nunca alrevez

function App() {
  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes")) ?? []
  );
  const [paciente, setPaciente] = useState({});

  // Local Storage es una API del navegador que permite la persistencia de datos en memoria. Dichos datos se almacenan en el propio browser web y pueden ser accedidos a los mismos aun si cerramos el navegador o apagamos el computador.

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );

    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto">
      <div className="md:flex py-5">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
