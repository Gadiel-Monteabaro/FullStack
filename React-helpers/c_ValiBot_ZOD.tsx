/*
  Una forma mas segura de realizar comprabaciones de tipo, es con una libreria llamada ZOD

  npm i zod

  En zod primero debemos crear un schema, con la forma que queremos los types
*/
import { z } from "zod";

//  ZOD
const Weather = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
  }),
});

// infiere en base a ese schema
type Weather = z.infer<typeof Weather>;

const { data: weatherResult } = await axios.get(weatherUrl);

const result = Weather.safeParse(weatherResult); // tomar el resultado de la consulta de la API, para validar la forma de nuestro objeto

if (result.success) {
  console.log(result.data.name);
}

/* ValiBot

import { object, string, number, Output, parse } from "valibot";

  // Valibot
  const WeatherSchema = object({
    name: string(),
    main: object({
      temp: number(),
      temp_max: number(),
      temp_min: number(),
    }),
  });

  // inferir
  type Weather = Output<typeof WeatherSchema>;

   const { data: weatherResult } = await axios.get(weatherUrl);
      const result = parse(WeatherSchema, weatherResult);

      if (result) {
        console.log(result.name);
      }
*/
