import jwt from "jsonwebtoken";
import Types from "mongoose";

type UserPayload = {
  id: Types.ObjectId;
};

// la función toma como argumento un objeto "payload", que tiene el tipo "userPayload"

export const generateJWT = (payload: UserPayload) => {
  // sign -> generamos el token
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "180d",
  });

  return token;
};
