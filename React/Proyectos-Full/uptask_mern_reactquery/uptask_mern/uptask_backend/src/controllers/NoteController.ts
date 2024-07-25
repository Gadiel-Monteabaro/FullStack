import type { Request, Response } from "express";
import Note, { INote } from "../models/Note";
import { Types } from "mongoose";

type NoteParams = {
  noteId: Types.ObjectId;
};

export class NoteController {
  // primer parametro, sirve para indicar tipos de datos de los params
  // segundo parametro, sirve para indicar tipos de datos de
  // tercer parametro, sirve para indicar tipos de datos del cuerpo
  static createNote = async (req: Request<{}, {}, INote>, res: Response) => {
    const { content } = req.body;
    const note = new Note();
    console.log(note.id);

    note.content = content;
    note.createdBy = req.user.id;
    note.task = req.task.id;

    req.task.notes.push(note.id);

    try {
      await Promise.allSettled([req.task.save(), note.save()]);
      res.send("Nota creada correctamente");
    } catch (error) {
      res.status(500).json({ error: "Hubo un Error" });
    }
  };

  static getTaskNotes = async (req: Request, res: Response) => {
    try {
      const notes = await Note.find({ task: req.task.id });
      res.json(notes);
    } catch (error) {
      res.status(500).json({ error: "Hubo un Error" });
    }
  };

  static deleteNote = async (req: Request<NoteParams>, res: Response) => {
    const { noteId } = req.params;

    const note = await Note.findById(noteId);

    // la ubicacion correcta seria en un middelware para menos codigo
    if (!note) {
      const error = new Error("Nota no encontrada");
      return res.status(404).json({ error: error.message });
    }
    // la ubicacion correcta seria en un middelware para menos codigo
    if (note.createdBy.toString() !== req.user.id.toString()) {
      const error = new Error("Acción no Válida");
      return res.status(401).json({ error: error.message });
    }

    req.task.notes = req.task.notes.filter(
      (note) => note.toString() !== noteId.toString()
    );

    try {
      await Promise.allSettled([req.task.save(), note.deleteOne()]);
      res.send("Nota Eliminada");
    } catch (error) {
      res.status(500).json({ error: "Hubo un Error" });
    }
  };
}
