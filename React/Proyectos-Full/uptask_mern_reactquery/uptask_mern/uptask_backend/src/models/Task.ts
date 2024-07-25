import mongoose, { Schema, Document, Types } from "mongoose";

// estados de nuestra tarea, solamente las propiedades seran de modo lectura
const taskStatus = {
  PENDING: "pending",
  ON_HOLD: "onHold",
  IN_PROGRESS: "inProgress",
  UNDER_REVIEW: "underReview",
  COMPLETED: "completed",
} as const;

// el type TaskStatus solo recibira como opcion los valores del objeto taskStatus
export type TaskStatus = (typeof taskStatus)[keyof typeof taskStatus];

// generamos la interface de ITask con la extencion de Document de express
export interface ITask extends Document {
  name: string;
  description: string;
  project: Types.ObjectId;
  status: TaskStatus;
  completeBy: {
    user: Types.ObjectId;
    status: TaskStatus;
  }[];
  notes: Types.ObjectId[];
}

// generamos el schema de las tareas
const TaskSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    project: { type: Types.ObjectId, ref: "Project" },
    status: {
      type: String,
      enum: Object.values(taskStatus),
      default: taskStatus.PENDING,
    },
    completeBy: [
      {
        user: {
          type: Types.ObjectId,
          ref: "User",
          default: null,
        },
        status: {
          type: String,
          enum: Object.values(taskStatus),
          default: taskStatus.PENDING,
        },
      },
    ],
    notes: [
      {
        type: Types.ObjectId,
        ref: "Note",
      },
    ],
  },
  { timestamps: true }
);

// generamos el model de las tareas
const Task = mongoose.model<ITask>("Task", TaskSchema);

export default Task;
