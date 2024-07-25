/*
  Cors
    Cross-Origin Resource Sharing
      Es un mecanismo de seguridad utilizado en los navegadores web para controlar las solicitudes de recursos entre dominios diferentes     
      
      Es una politica de seguridad implementada en el lado del servidor que permite o deniega las solicitudes de recursos web de un origen cruzado 
    
    Cross Origin - Origen Cruzado
      Cuando un recurso, se solicita desde un dominio o puerto diferente al del origen del recurso actual,se considera una solicitud de origen cruzado

      Antes, los navegadores web modernos restringían automáticamente las solicitudes de origen cruzado para prevenir ataques de seguridad

    dominio-front            dominio-back
      FrontEnd  <-- ------ --> BackEnd

      Seguridad
        CORS permite a los servidores tener un control mas granular sobre qué dominios pueden acceder a los recursos, reduciendo la posibilidad de ataques
    
      Acceso controlado a recursos
        CORS permite a los sitios web controlar qué recursos están disponibles para ser solicitados por dominios externos y que recursos están restringidos

      Interoperabilidad
        CORS facilita en intercambio de datos y recursos entre diferentes dominios, situaciones en las que una pagina web necesita cargar recursos de multiples dominios para funcionar correctamente

*/
// se instala unicamente en el servidor
// npm i cors
// npm i -D @types/cors

// Permitir conexiones
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (origin === process.env.FRONTEND_URL) {
      callback(null, true);
    } else {
      callback(new Error("Error de CORS"));
    }
  },
};
app.use(cors(corsOptions));
