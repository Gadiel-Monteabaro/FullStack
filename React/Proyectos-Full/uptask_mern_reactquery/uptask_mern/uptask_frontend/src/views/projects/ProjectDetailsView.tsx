import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getFullProject } from "../../api/ProjectAPI";
import AddTaskModal from "../../components/tasks/AddTaskModal";
import TaskList from "../../components/tasks/TaskList";
import EditTaskData from "../../components/tasks/EditTaskData";
import TaskModalDetails from "../../components/tasks/TaskModalDetails";
import { useAuth } from "../../hooks/useAuth";
import { isManager } from "../../utils/policies";
import { useMemo } from "react";

export default function ProjectDetailsView() {
  const { data: user, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();

  const params = useParams();
  const projectId = params.projectId!;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getFullProject(projectId),
    retry: false,
  });

  // funcion de permisos de edicion y eliminación de tareas
  const canEdit = useMemo(() => data?.manager === user?._id, [data, user]);

  if (isLoading && authLoading) return "Cargando...";
  if (isError) return <Navigate to="/404" />;

  if (data && user)
    return (
      <>
        <h1 className="text-3xl font-black">{data.projectName}</h1>
        <p className="text-2xl font-light text-gray-500 mt-5"></p>
        {isManager(data.manager, user._id) && (
          <nav className="my-5 flex gap-3">
            <button
              className="bg-purple-500 hover:bg-purple-600 p-3  text-white font-bold cursor-pointer transition-colors rounded-sm"
              type="button"
              onClick={() => navigate(location.pathname + "?newTask=true")}
            >
              Agregar Tarea
            </button>
            <Link
              to={"team"}
              className="bg-fuchsia-500 hover:bg-fuchsia-600 p-3  text-white font-bold cursor-pointer transition-colors rounded-sm"
            >
              Colaboradores
            </Link>
          </nav>
        )}

        <TaskList canEdit={canEdit} tasks={data.tasks} />
        <AddTaskModal />
        <EditTaskData />
        <TaskModalDetails />
      </>
    );
}
