/*
  Nested Resource Routing
    Enrutamiento de recursos anidados
      Patrón de diseño en la construcción de URL's para API's, especialmente en API's RESTful, donde las relaciones jerárquicas entre recursos son expresadas en la estructura de la URL

    Middleware
      La forma de implementarlo
        Nos va a permitir darle un mejor orden a nuestras rutas, para aplicar este patón de diseño para las URL's
        Debido a que los Middleware se ejecutan en las peticiones HTTP y antes del controlador, los hacen un gran lugar para poder ejecutar ciertas acciones referentes a si los proyectos existen o si el usuario tiene permisos para acceder a él
*/
