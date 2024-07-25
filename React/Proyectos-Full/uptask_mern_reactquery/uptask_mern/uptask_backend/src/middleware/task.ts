import type { Request, Response, NextFunction } from "express";
import Task, { ITask } from "../models/Task";

/*
  Esta declaración agrega una nueva propiedad "project" de tipo "IProject" a la interfaz de solicitud en el espacio de nombre Express, la cual podemos utilizar de manera global en los Request
*/
declare global {
  namespace Express {
    interface Request {
      task: ITask;
    }
  }
}

export async function taskExists(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // tomamos el id del proyecto, atravez de la URL, con los params
    const { taskId } = req.params;
    // buscamos el proyecto vinculado con el id obtenido de la URL
    const task = await Task.findById(taskId);
    // comprobamos que tal proyecto exista, sino es asi, lanzamos un mensaje de error como respuesta
    if (!task) {
      const error = new Error("Tarea no encontrado");
      return res.status(404).json({ error: error.message });
    }
    // guardando el proyecto en la variable global de request
    req.task = task;
    next();
  } catch (error) {
    res.status(500).json({ error: "Hubo un Error" });
  }
}

export async function taskBelongsToProject(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // validar que el id de la tarea corresponda con el proyecto
  if (req.task.project.toString() !== req.project.id.toString()) {
    // lanzar un error en formato json al no coincidir
    const error = new Error("Acción no válida");
    return res.status(400).json({ error: error.message });
  }
  next();
}

export async function hasAuthorization(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // validar que el id de la tarea corresponda con el proyecto
  if (req.user.id.toString() !== req.project.manager.toString()) {
    // lanzar un error en formato json al no coincidir
    const error = new Error("Acción no válida");
    return res.status(400).json({ error: error.message });
  }
  next();
}
