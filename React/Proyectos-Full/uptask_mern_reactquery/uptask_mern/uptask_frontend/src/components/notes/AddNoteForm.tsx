import { useForm } from "react-hook-form";
import { NoteFormData } from "../../types";
import ErrorMessage from "../ErrorMessage";
import { useMutation } from "@tanstack/react-query";
import { createNote } from "../../api/NoteApi";
import { toast } from "react-toastify";
import { useLocation, useParams } from "react-router-dom";

export default function AddNoteForm() {
  // id del proyecto atrave de los parametros
  const params = useParams();
  const projectId = params.projectId!;

  // id de la tarea atraves de los parametro de consulta
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("viewTask")!;

  const initialValues: NoteFormData = {
    content: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: createNote,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
    },
  });

  const handleAddNote = (formData: NoteFormData) => {
    mutate({ projectId, taskId, formData });
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(handleAddNote)}
      className="space-y-3"
      noValidate
    >
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="content">
          Crear Nota
        </label>
        <input
          id="content"
          type="text"
          placeholder="Cotenido de la nota"
          className="w-full p-3  border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-b-fuchsia-700 focus:shadow-md focus:shadow-fuchsia-400 leading-tigh"
          {...register("content", {
            required: "El contenido de la nota es Obligatorio",
          })}
        />
        {errors.content && (
          <ErrorMessage>{errors.content.message}</ErrorMessage>
        )}
      </div>

      <input
        type="submit"
        name="content"
        id="content"
        value="Crear Nota"
        className=" bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-2 text-white font-black cursor-pointer rounded"
      />
    </form>
  );
}
