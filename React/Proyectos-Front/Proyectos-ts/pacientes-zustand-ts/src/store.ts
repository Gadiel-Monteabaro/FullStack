// importamos la funcion de create
import { create } from "zustand";
// persist, nos va a permitir tener un estado persistente
import { devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { DraftPatient, Patient } from "./types";
import { toast } from "react-toastify";

type PatientState = {
  patients: Patient[];
  activeId: Patient["id"];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
  getPatientById: (id: Patient["id"]) => void;
  updatePatient: (data: DraftPatient) => void;
};

// creamos el paciente, agregando el id
const createPatient = (patient: DraftPatient): Patient => {
  return {
    ...patient,
    id: uuidv4(),
  };
};

// nombre del hook
export const usePatienteStore = create<PatientState>()(
  devtools(
    persist(
      (set) => ({
        // En esta parte colocamos tanto el state, como las funciones que modifican ese state

        patients: [], // Estado donde se almacenan los pacientes.
        // funcion para editar
        activeId: "",
        // funcion que agrega el paciente dentro del state de patients
        addPatient: (data) => {
          const newPatient = createPatient(data);
          set((state) => ({
            patients: [...state.patients, newPatient],
          }));
        },
        // funcion que elimina un paciente del state de patients
        deletePatient: (id) => {
          set((state) => ({
            patients: state.patients.filter((patient) => patient.id !== id),
          }));
          toast.error("Paciente Eliminado.");
        },
        getPatientById: (id) => {
          set(() => ({
            activeId: id,
          }));
        },
        updatePatient: (data) => {
          set((state) => ({
            patients: state.patients.map((patient) =>
              patient.id === state.activeId
                ? { id: patient.id, ...data }
                : patient
            ),
            activeId: "",
          }));
        },
      }),
      {
        name: "patient-storage",
        // storage: createJSONStorage(() => sessionStorage), podemos especificar si queremos sessionstorage o localStorage(default)
      }
    )
  )
);
