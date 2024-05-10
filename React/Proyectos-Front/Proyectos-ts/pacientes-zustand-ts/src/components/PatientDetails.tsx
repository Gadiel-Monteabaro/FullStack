import { Patient } from "../types";
import PatientDetailsItem from "./PatientDetailsItem";
import { usePatienteStore } from "../store";

type PatientDetailsProps = {
  patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {
  const deletePatient = usePatienteStore((state) => state.deletePatient);
  const getPatientById = usePatienteStore((state) => state.getPatientById);

  return (
    <div className="mx-5 my-5 p-5 bg-white shadow-md rounded-xl ">
      <PatientDetailsItem label="ID" data={patient.id} />
      <PatientDetailsItem label="Nombre" data={patient.name} />
      <PatientDetailsItem label="Propietario" data={patient.caretaker} />
      <PatientDetailsItem label="Email" data={patient.email} />
      <PatientDetailsItem label="Fecha Alta" data={patient.date.toString()} />
      <PatientDetailsItem label="Sintomas" data={patient.symptoms} />

      <div className="flex flex-col gap-y-3 md:flex-row md:gap-5 mt-5">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => getPatientById(patient.id)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={() => deletePatient(patient.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
