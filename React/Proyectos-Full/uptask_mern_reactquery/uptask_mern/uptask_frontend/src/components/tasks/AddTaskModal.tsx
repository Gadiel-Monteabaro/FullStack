import { Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import TaskForm from "./TaskForm";
import { TaskFormData } from "../../types";
import { createTask } from "../../api/TaskAPI";
import { toast } from "react-toastify";

export default function AddTaskModal() {
  /* Visualizacion modal atravez de url */
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const modalTask = queryParams.get("newTask");
  const show = modalTask ? true : false;

  /* useForm */
  const initialValues: TaskFormData = {
    name: "",
    description: "",
  };

  /* Obtener projectID */
  const params = useParams();
  const projectId = params.projectId!;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createTask,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["project", projectId] });
      toast.success(data);
      reset(); // reinicia el formulario
      navigate(location.pathname, { replace: true });
    },
  });

  const handleCreateTask = (formData: TaskFormData) => {
    const data = {
      formData,
      projectId,
    };

    mutate(data);
  };

  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            navigate(location.pathname, { replace: true }); // quitamos de la url todos los campos extras
          }}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-10">
                  <DialogTitle as="h3" className="font-black text-4xl  my-5">
                    Nueva Tarea
                  </DialogTitle>

                  <p className="text-xl font-bold">
                    Llena el formulario y crea {""}
                    <span className="text-fuchsia-600">una tarea</span>
                  </p>
                  <form
                    className="mt-10 space-y-3"
                    onSubmit={handleSubmit(handleCreateTask)}
                    noValidate
                  >
                    <TaskForm register={register} errors={errors} />
                    <input
                      className=" bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors rounded"
                      type="submit"
                      value="Guardar Tarea"
                    />
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
