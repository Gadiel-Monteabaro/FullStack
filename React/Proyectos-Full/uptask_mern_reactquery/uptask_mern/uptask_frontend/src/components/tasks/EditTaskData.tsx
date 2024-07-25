import { Navigate, useLocation, useParams } from "react-router-dom";
import { getTaskById } from "../../api/TaskAPI";
import { useQuery } from "@tanstack/react-query";
import EditTaskModal from "./EditTaskModal";

export default function EditTaskData() {
  const params = useParams();
  const projectId = params.projectId!;

  const location = useLocation();
  // interfaz en js que facilita la manipulacion de los parametros de consulta en un URL
  const queryParams = new URLSearchParams(location.search);
  // valor de la URL
  const taskId = queryParams.get("editTask")!;

  const { data, isError } = useQuery({
    queryKey: ["task", taskId],
    queryFn: () => getTaskById({ projectId, taskId }),
    enabled: !!taskId,
    retry: false, // cantidad de veces que realiza consulta react query
  });

  if (isError) return <Navigate to={"/404"} />;

  if (data) return <EditTaskModal data={data} taskId={taskId} />;
}
