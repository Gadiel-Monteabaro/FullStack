import type { Request, Response, NextFunction } from "express";
import Project, { IProject } from "../models/Project";

/*
  Esta declaración agrega una nueva propiedad "project" de tipo "IProject" a la interfaz de solicitud en el espacio de nombre Express, la cual podemos utilizar de manera global en los Request
*/
declare global {
  namespace Express {
    interface Request {
      project: IProject;
    }
  }
}

export async function projectExists(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // tomamos el id del proyecto, atravez de la URL, con los params
    const { projectId } = req.params;
    // buscamos el proyecto vinculado con el id obtenido de la URL
    const project = await Project.findById(projectId);
    // comprobamos que tal proyecto exista, sino es asi, lanzamos un mensaje de error como respuesta
    if (!project) {
      const error = new Error("Proyecto no encontrado");
      return res.status(404).json({ error: error.message });
    }
    // guardando el proyecto en la variable global de request
    req.project = project;
    next();
  } catch (error) {
    res.status(500).json({ error: "Hubo un Error" });
  }
}
