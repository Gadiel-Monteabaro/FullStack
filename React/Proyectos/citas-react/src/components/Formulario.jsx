import { useState, useEffect } from "react";
import Error from "./Error";

// state __ Cual es el estado de nuestra aplicacion.

// state __ Pertenece a un componente en especifico o algunas veces deseas compartirlo a lo largo de diferentes componentes.

// effect __ Callback, se ejecuta cuando un state cambia

// effect __ Codigo para consultar una API,

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  // Hooks __ se colocan en la parte superior de los componentes

  // Hooks __ No se deben colocar dentro de condicionales, tampoco despues de un return
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  // State error __ para visualizar si hay un error con los campos
  const [error, setError] = useState(false);

  // useEffect utilizado para Voton Editar
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  // Generar Id
  const generarId = () => {
    const random = Math.random().toString(36).slice(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validacion del Formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    // Objeto de Pacientes
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      // Editando Registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente([]);
    } else {
      // Nuevo Registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciar el Formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 ">
      <h2 className="font-black text-2xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-3 text-center mb-3">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md
      rounded-lg p-10"
        action=""
      >
        {error && <Error mensaje={"Todos los campos son obligatorios."} />}

        <div className="mb-5  pb-1">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            type="text"
            name=""
            id="mascota"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md
            focus:outline-none focus:bg-white focus:border-indigo-500 leading-tight
          "
            value={nombre}
            // onChange __ Evento de React
            // Todos los eventos de JS, estan en React
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5 pb-1">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            name=""
            id="propietario"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md
            focus:outline-none focus:bg-white focus:border-indigo-500 leading-tight
            "
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5 pb-1">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name=""
            id="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md
            focus:outline-none focus:bg-white focus:border-indigo-500 leading-tight
            "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5 pb-1">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            type="date"
            name=""
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md
            focus:outline-none focus:bg-white focus:border-indigo-500 leading-tight
            "
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5  pb-1">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            name=""
            id="sintomas"
            placeholder="Describe los Sintomas."
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md
            focus:outline-none focus:bg-white focus:border-indigo-500 leading-tight
            "
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          className="btn shadow bg-indigo-500 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded uppercase w-full cursor-pointer transition-all mb-3"
        />
      </form>
    </div>
  );
};

export default Formulario;
