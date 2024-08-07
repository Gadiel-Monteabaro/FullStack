import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PatientsList from "./components/PatientsList";
import PatientForm from "./components/PatientForm";

function App() {
  return (
    <>
      {/* Encabezado */}
      <div className=" container mx-auto mt-10">
        <h1 className="font-black text-3xl text-center md:w-2/3 md:mx-auto">
          Seguimiento de Pacientes{" "}
          <span className="text-indigo-700">Veterinaria</span>
        </h1>
      </div>

      {/* Dos componentes; Formulario de Pacientes y Listado de Pacientes */}
      <div className="mt-12 md:flex">
        <PatientForm />
        <PatientsList />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
