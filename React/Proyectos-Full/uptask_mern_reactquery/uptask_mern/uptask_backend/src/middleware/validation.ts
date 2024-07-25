import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

// Definición de la función handleInputErrors
export const handleInputErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Obtiene los resultados de la validación de la solicitud
  let errors = validationResult(req);
  // Si hay errores, responde con un estado 400 y los errores en formato JSON
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Si no hay errores, pasa al siguiente middleware
  next();
};
