import type { Request, Response } from "express";
import Task from "../models/Task";

export class TaskController {
  // funcion que crea una tarea
  static createTask = async (req: Request, res: Response) => {
    try {
      //  instanciamos una nueva coleccion del modelo Task, con la informacion recibida en el body
      const task = new Task(req.body);
      // asignamos el id del proyecto a la tarea
      task.project = req.project.id;
      // guardamos la tarea en el arreglo de poryecto con el metodo push
      req.project.tasks.push(task.id);
      // guardamos los datos con el metodo save(), informacion que sera enviada a la BD
      await Promise.allSettled([task.save(), req.project.save()]);
      // mostramos como respuesta un mensaje de confirmacion
      res.send("Tarea creada correctamente");
    } catch (error) {
      res.status(500).json({ error: "Hubo un Error" });
    }
  };

  // funcion que tomas las tareas correspondientes a un proyecto
  static getProjectTask = async (req: Request, res: Response) => {
    try {
      // devolviendo las tareas correspondientes al id del proyecto
      const tasks = await Task.find({ project: req.project.id }).populate(
        "project"
      );
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: "Hubo un Error" });
    }
  };

  // funcion que devuelve una tarea con respecto a su id
  static getTaskById = async (req: Request, res: Response) => {
    try {
      const task = await Task.findById(req.task.id)
        .populate({
          path: "completeBy.user", // por la estructura del modelo
          select: "id name email",
        })
        .populate({
          path: "notes",
          populate: { path: "createdBy", select: "id name email" },
        });
      // devolver una respuesta de la tarea requerida en formato json
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: "Hubo un Error" });
    }
  };

  static updateTask = async (req: Request, res: Response) => {
    try {
      // actualizar tarea
      req.task.name = req.body.name;
      req.task.description = req.body.description;
      await req.task.save();
      // devolver una respuesta de la tarea requerida en formato json
      res.send("Tarea actualizada correctamente");
    } catch (error) {
      res.status(500).json({ error: "Hubo un Error" });
    }
  };

  static deleteTask = async (req: Request, res: Response) => {
    try {
      // borrar la referencia de la tarea del proyecto
      req.project.tasks = req.project.tasks.filter(
        (task) => task.toString() !== req.task.id.toString()
      );
      await Promise.allSettled([req.task.deleteOne(), req.project.save()]);
      // devolver una respuesta de la tarea requerida en formato json
      res.send("Tarea eliminada correctamente");
    } catch (error) {
      res.status(500).json({ error: "Hubo un Error" });
    }
  };

  static updateStatus = async (req: Request, res: Response) => {
    try {
      const { status } = req.body;
      req.task.status = status;
      const data = {
        user: req.user.id,
        status,
      };
      req.task.completeBy.push(data);
      await req.task.save();
      res.send("Estado de la tarea actualizada");
    } catch (error) {
      res.status(500).json({ error: "Hubo un Error" });
    }
  };
}
