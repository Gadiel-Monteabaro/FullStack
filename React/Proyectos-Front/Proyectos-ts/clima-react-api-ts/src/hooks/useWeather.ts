import axios from "axios";
import { z } from "zod";
import { SearchType } from "../types";
import { useMemo, useState } from "react";

// ZOD
const Weather = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
  }),
});
export type Weather = z.infer<typeof Weather>;

// Como el state inicial se repite, DRY
const initialState = {
  name: "",
  main: {
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
};

export default function useWeather() {
  const [weather, setWeather] = useState<Weather>(initialState);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  //Las consultas a API, son almacenadas en funciones con el termino fetch
  const fetchWeather = async (search: SearchType) => {
    const appId = import.meta.env.VITE_API_KEY;
    setLoading(true);
    setNotFound(false);
    setWeather(initialState);
    try {
      // Geolocalización, url, para determinar la longitud y la latitud
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;
      const { data } = await axios.get(geoUrl); // el metodo get es por default

      // Comprobar si existe
      if (!data[0]) {
        setNotFound(true);
        return;
      }

      const lat = data[0].lat;
      const lon = data[0].lon;

      // Clima, establecido por la "lat" y "lon"
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

      const { data: weatherResult } = await axios.get(weatherUrl);
      const result = Weather.safeParse(weatherResult);

      if (result.success) {
        setWeather(result.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    /* 
        Castear el Type

        const { data: weatherResult } = await axios.get<Weather>(weatherUrl);
        console.log(weatherResult.main.pressure);
    */
  };

  // funcion para validad que haya informacion en el state de weather
  const hasWeatherData = useMemo(() => weather.name, [weather]);

  return {
    weather,
    loading,
    notFound,
    fetchWeather,
    hasWeatherData,
  };
}
