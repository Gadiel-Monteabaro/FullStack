import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL!, {
  models: [__dirname + "/../models/**/*.ts"],
  logging: false,
});

export default db;

// ?ssl=true -agregar al final de la url

/* otra forma de conectar; agregar como segundo parametro
  dialectOptions: {
      ssl: {
        require: false,
      },
    },
  }
*/
