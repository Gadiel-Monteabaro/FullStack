import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TaskFormData } from "../../types";
import ErrorMessage from "../ErrorMessage";

type TaskFormProps = {
  errors: FieldErrors<TaskFormData>;
  register: UseFormRegister<TaskFormData>;
};

export default function TaskForm({ errors, register }: TaskFormProps) {
  return (
    <>
      <div className="flex flex-col gap-5">
        <label className="font-normal text-2xl" htmlFor="name">
          Nombre de la tarea
        </label>
        <input
          id="name"
          type="text"
          placeholder="Nombre de la tarea"
          className="w-full p-3  border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-b-fuchsia-700 focus:shadow-md focus:shadow-fuchsia-400 leading-tigh"
          {...register("name", {
            required: "El nombre de la tarea es obligatorio",
          })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-5">
        <label className="font-normal text-2xl" htmlFor="description">
          Descripción de la tarea
        </label>
        <textarea
          id="description"
          placeholder="Descripción de la tarea"
          className="w-full p-3  border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-b-fuchsia-700 focus:shadow-md focus:shadow-fuchsia-400 leading-tigh"
          {...register("description", {
            required: "La descripción de la tarea es obligatoria",
          })}
        />
        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}
      </div>
    </>
  );
}
