import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import ProjectForm from "../../components/projects/ProjectForm";
import { ProjectFormData } from "../../types";
import { createProject } from "../../api/ProjectAPI";

export default function CreateProjectView() {
  const navigate = useNavigate();

  const initialValues: ProjectFormData = {
    projectName: "",
    clientName: "",
    description: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createProject,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      //Este método es útil cuando sabes que los datos han cambiado y quieres asegurarte de que la interfaz de usuario se actualice con los datos más recientes
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success(data, {
        theme: "dark",
        autoClose: 3000,
      });
      navigate("/");
    },
  });

  const handleForm = async (formData: ProjectFormData) => mutate(formData);

  return (
    <>
      <div className=" max-w-2xl mx-auto">
        <h1 className="text-3xl font-black">Crear Proyecto</h1>
        <p className=" text-md font-light text-gray-500 mt-3">
          LLena el siguiente formulario
        </p>
        <nav className="my-3  ">
          <Link
            className="bg-purple-400 hover:bg-purple-500 px-5 py-2 text-white text-xl font-bold cursor-pointer transition-colors "
            to="/"
          >
            Volver a Proyectos
          </Link>
        </nav>
        <form
          className="mt-5 bg-white shadow-lg p-10 rounded-lg"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <ProjectForm register={register} errors={errors} />
          <input
            className=" bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors rounded"
            type="submit"
            value="Crear Proyecto"
          />
        </form>
      </div>
    </>
  );
}
