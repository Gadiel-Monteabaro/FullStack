import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { corsConfig } from "./config/cors";
import { connectDB } from "./config/db";
import authRoutes from "./routes/authRoutes";
import projectRoutes from "./routes/projectRoutes";

dotenv.config();
connectDB();
const app = express();
app.use(cors(corsConfig));
// logging
app.use(morgan("dev")); // 304 - not modified

app.use(express.json()); // Leer datos de formularios

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

export default app;
