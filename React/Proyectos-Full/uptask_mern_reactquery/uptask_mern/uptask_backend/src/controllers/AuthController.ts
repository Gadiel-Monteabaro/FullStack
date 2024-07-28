import type { Request, Response } from "express";
import User from "../models/User";
import { checkPassword, hashPassword } from "../utils/auth";
import Token from "../models/Token";
import { generateToken } from "../utils/token";
import { AuthEmail } from "../emails/AuthEmail";
import { generateJWT } from "../utils/jws";

export class AuthController {
  static createAccount = async (req: Request, res: Response) => {
    try {
      const { password, email } = req.body;
      // Prevenir Duplicados
      const userExists = await User.findOne({ email });
      if (userExists) {
        const error = new Error("El Usuario ya esta registrado");
        return res.status(409).json({ error: error.message });
      }
      // Crear usuario
      const user = new User(req.body);
      // Hash password
      user.password = await hashPassword(password);
      // Generar Token
      const token = new Token();
      token.token = generateToken();
      token.user = user.id; // vincular token con el id del usuario
      // enviar email
      AuthEmail.sendConfirmationEmail({
        email: user.email,
        name: user.name,
        token: token.token,
      });
      // Guardar Usuario y Token
      await Promise.allSettled([user.save(), token.save()]);
      res.send("Cuenta Creada, revisa tu email para configurarla");
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  };

  static confirmAccount = async (req: Request, res: Response) => {
    try {
      // tomar el token del cuerpo
      const { token } = req.body;
      // buscar en el modelo Token, el token ingresado
      const tokenExists = await Token.findOne({ token });
      // ejecutar mensaje de error, en caso de token no válido
      if (!tokenExists) {
        const error = new Error("Token no válido");
        return res.status(404).json({ error: error.message });
      }
      // buscar el usuario en el modelo User, por medio del id del modelo Token
      const user = await User.findById(tokenExists.user);
      user.confirmed = true; // modificar la propiedad confirmed
      await Promise.allSettled([user.save(), tokenExists.deleteOne()]);
      res.send("Cuenta confirmada correctamente");
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  };

  static login = async (req: Request, res: Response) => {
    try {
      // obtener la información
      const { email, password } = req.body;
      // obtener el modelo de User, atravez del email
      const user = await User.findOne({ email });
      // comprobar que el modelo exista, caso no valido
      if (!user) {
        const error = new Error("Usuario no encontrado");
        return res.status(404).json({ error: error.message });
      }
      // comprobar validacion de la cuenta
      if (!user.confirmed) {
        const token = new Token();
        token.user = user.id;
        token.token = generateToken();
        await token.save();
        // enviar email
        AuthEmail.sendConfirmationEmail({
          email: user.email,
          name: user.name,
          token: token.token,
        });
        const error = new Error(
          "La cuenta no ha sido confirmada, hemos enviado un e-mail de confirmación"
        );
        return res.status(401).json({ error: error.message });
      }
      // revisar password
      const isPasswordCorrect = await checkPassword(password, user.password);
      if (!isPasswordCorrect) {
        const error = new Error("Password incorrecto");
        return res.status(401).json({ error: error.message });
      }

      // Siempre colocar lo minimo para que el servidor identifique a esa persona
      const token = generateJWT({
        id: user.id,
      });

      res.send(token);
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  };

  static requestConfirmationCode = async (req: Request, res: Response) => {
    try {
      const { email } = req.body;
      // usuario existe
      const user = await User.findOne({ email });
      if (!user) {
        const error = new Error("El Usuario no esta registrado");
        return res.status(404).json({ error: error.message });
      }
      // usuario ya existente
      if (user.confirmed) {
        const error = new Error("El Usuario ya esta confirmado");
        return res.status(403).json({ error: error.message });
      }
      // Generar Token
      const token = new Token();
      token.token = generateToken();
      token.user = user.id; // vincular token con el id del usuario
      // enviar email
      AuthEmail.sendConfirmationEmail({
        email: user.email,
        name: user.name,
        token: token.token,
      });
      // Guardar Usuario y Token
      await Promise.allSettled([user.save(), token.save()]);
      res.send("Se envio un nuevo token a tu email");
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  };

  static forgotPassword = async (req: Request, res: Response) => {
    try {
      const { email } = req.body;
      // usuario existe
      const user = await User.findOne({ email });
      if (!user) {
        const error = new Error("El Usuario no esta registrado");
        return res.status(404).json({ error: error.message });
      }
      // Generar Token
      const token = new Token();
      token.token = generateToken();
      token.user = user.id; // vincular token con el id del usuario
      await token.save();
      // enviar email
      AuthEmail.sendPasswordResetToken({
        email: user.email,
        name: user.name,
        token: token.token,
      });
      res.send("Revisa tu email para intrucciones");
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  };

  static validateToken = async (req: Request, res: Response) => {
    try {
      // tomar el token del cuerpo
      const { token } = req.body;
      // buscar en el modelo Token, el token ingresado
      const tokenExists = await Token.findOne({ token });
      // ejecutar mensaje de error, en caso de token no válido
      if (!tokenExists) {
        const error = new Error("Token no válido");
        return res.status(404).json({ error: error.message });
      }

      res.send("Token válido, Define tu nuevo password");
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  };

  static updatePasswordWithToken = async (req: Request, res: Response) => {
    try {
      // tomar el token de los parametros
      const { token } = req.params;
      // tomar la contraseña del body
      const { password } = req.body;
      // buscar en el modelo Token, el token ingresado
      const tokenExists = await Token.findOne({ token });
      // ejecutar mensaje de error, en caso de token no válido
      if (!tokenExists) {
        const error = new Error("Token no válido");
        return res.status(404).json({ error: error.message });
      }

      const user = await User.findById(tokenExists.user);
      user.password = await hashPassword(password);

      await Promise.allSettled([user.save(), tokenExists.deleteOne()]);

      res.send("El password se modificó correctamente");
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  };

  static user = async (req: Request, res: Response) => {
    return res.json(req.user);
  };

  static updateProfile = async (req: Request, res: Response) => {
    const { name, email } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists && userExists.id.toString() !== req.user.id.toString()) {
      const error = new Error("Ese email ya esta en uso");
      return res.status(409).json({ error: error.message });
    }

    req.user.name = name;
    req.user.email = email;

    try {
      await req.user.save();
      res.send("Perfil actualizado correctamente");
    } catch (error) {
      res.status(500).send("Hubo un error");
    }
  };

  static updateCurrentUserPassword = async (req: Request, res: Response) => {
    const { current_password, password } = req.body;

    const user = await User.findById(req.user.id);

    const isPasswordCorrect = await checkPassword(
      current_password,
      user.password
    );
    if (!isPasswordCorrect) {
      const error = new Error("La contraseña actual es incorrecta");
      return res.status(401).json({ error: error.message });
    }

    try {
      user.password = await hashPassword(password);
      await user.save();
      res.send("La contraseña fue actualizada correctamente");
    } catch (error) {
      res.status(500).send("Hubo un error");
    }
  };

  static checkPassword = async (req: Request, res: Response) => {
    const { password } = req.body;

    const user = await User.findById(req.user.id);

    const isPasswordCorrect = await checkPassword(password, user.password);
    if (!isPasswordCorrect) {
      const error = new Error("La contraseña es incorrecta");
      return res.status(401).json({ error: error.message });
    }

    res.send("Contraseña correcta");
  };
}
