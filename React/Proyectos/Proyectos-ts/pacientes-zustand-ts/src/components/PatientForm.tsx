import { useForm } from "react-hook-form";
import Error from "./Error";
import type { DraftPatient } from "../types";
import { usePatienteStore } from "../store";
import { useEffect } from "react";

export default function PatientForm() {
  // Obtenemos la funcion que necesitamos de nuestro store
  // const { addPatient } = usePatienteStore();
  const addPatient = usePatienteStore((state) => state.addPatient);
  const activeId = usePatienteStore((state) => state.activeId);
  const patients = usePatienteStore((state) => state.patients);
  const updatePatient = usePatienteStore((state) => state.updatePatient);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<DraftPatient>(); // useForm __ nos permite mejorar nuestra validación de formulario

  // Detectamos si el estado "activeId" tiene un id asignado
  useEffect(() => {
    if (activeId) {
      const activePatient = patients.filter(
        (patient) => patient.id === activeId
      )[0];
      // seteamos los valors de los imputs
      setValue("name", activePatient.name);
      setValue("caretaker", activePatient.caretaker);
      setValue("email", activePatient.email);
      setValue("date", activePatient.date);
      setValue("symptoms", activePatient.symptoms);
    }
  }, [activeId]);

  // Los datos ingresados por el usuario, son obtenidos por "data"
  const registerPatient = (data: DraftPatient) => {
    // Todas la funciones las aplicamos dentro del registerPatient
    if (activeId) {
      updatePatient(data);
    } else {
      addPatient(data);
    }
    reset(); // Reseteamos el formulario
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-xl mt-5 text-center mb-5">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-5 "
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Paciente
          </label>
          <input
            id="name"
            className="w-full p-3 bg-white border-2 border-gray-100  rounded-sm focus:outline-none focus:bg-white focus:border-indigo-700  leading-tigh"
            type="text"
            placeholder="Nombre del Paciente"
            {...register("name", {
              required: "El nombre del paciente es obligatorio.",
            })}
          />

          {errors.name && <Error>{errors.name?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Propietario
          </label>
          <input
            id="caretaker"
            className="w-full p-3 bg-white border-2 border-gray-100  rounded-sm focus:outline-none focus:bg-white focus:border-indigo-700  leading-tigh"
            type="text"
            placeholder="Nombre del Propietario"
            {...register("caretaker", {
              required: "El nombre del propietario es obligatorio.",
            })}
          />

          {errors.caretaker && <Error>{errors.caretaker?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3 bg-white border-2 border-gray-100  rounded-sm focus:outline-none focus:bg-white focus:border-indigo-700  leading-tigh"
            type="email"
            placeholder="Email de Registro"
            {...register("email", {
              required: "El email es obligatorio.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email No Válido",
              },
            })}
          />
          {errors.email && <Error>{errors.email?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="date"
            className="w-full p-3 bg-white border-2 border-gray-100  rounded-sm focus:outline-none focus:bg-white focus:border-indigo-700  leading-tigh"
            type="date"
            {...register("date", {
              required: "La fecha de alta es obligatoria.",
            })}
          />
          {errors.date && <Error>{errors.date?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3 bg-white border-2 border-gray-100  rounded-sm focus:outline-none focus:bg-white focus:border-indigo-700  leading-tigh"
            placeholder="Síntomas del paciente"
            {...register("symptoms", {
              required: "Por Favor, agregar los sintomas del paciente.",
            })}
          />
          {errors.symptoms && <Error>{errors.symptoms?.message}</Error>}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={activeId ? "Editar Paciente" : "Guardar Paciente"}
        />
      </form>
    </div>
  );
}
