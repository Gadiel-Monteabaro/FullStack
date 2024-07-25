import mongoose from "mongoose";
import colors from "colors";
import { exit } from "node:process";

// conexion a la base de datos de manera asyncrona
export const connectDB = async () => {
  try {
    // usando mongoose para establecer la conexion a la base de datos, atravez de una variable global, que contiene la url de la BD
    const { connection } = await mongoose.connect(process.env.DATABASE_URL);
    // guardando la informacion de la urL, especificamente el host y el puerto de la BD
    const url = `${connection.host}:${connection.port}`;
    // mostrando la informacion de la url, cuando la conexion es exitosa
    console.log(colors.cyan.bold(`MongoDB Conectado en: ${url}`));
  } catch (error) {
    // mostrando los errores posibles a la conexion de la BD { Auth, Tipeo, Syntaxis, etc }
    console.log(error.message);
    console.log(colors.red.bold(`Error al conectar a MongoDB`));
    // finalizando el estado de salida, con una terminacion anormal
    exit(1);
  }
};
// Configuración de  conexión a base de datos MongoDB
