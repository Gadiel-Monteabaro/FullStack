import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mt-14 md:mt-0 scroll">
      {pacientes && pacientes.length ? (
        <div>
          <h2 className="font-black text-2xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-lg mt-3 text-center mb-3">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold ">
              pacientes y citas
            </span>
            .
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </div>
      ) : (
        <div>
          <h2 className="font-black text-2xl text-center">
            Sin registro de Pacientes
          </h2>
          <p className="text-lg mt-3 text-center mb-3">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold ">
              pacientes y citas
            </span>
            .
          </p>
        </div>
      )}
    </div>
  );
};

export default ListadoPacientes;
