import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// se añade un interceptor a las solicitudes realizadas por la instancia de Axios llamada "api"
// este interceptor es una función que recibe la configuración "config" de la solicitud
api.interceptors.request.use((config) => {
  // se obtiene el token de autenticación almacenado en el "localstorage" del navegador con la clave "AUTH_TOKEN"
  const token = localStorage.getItem(`AUTH_TOKEN`);
  // si el token existe procedemos
  if (token) {
    // se agrega un encabezadp de autorización a la configuración de la solicitud
    config.headers.Authorization = `Bearer ${token}`;
  }
  // este patrón es útil para que todas las solicitudes a una API que reciben autenticación incluyan el token necesario sin tener que añadirlo manualmente
  return config;
});

export default api;
