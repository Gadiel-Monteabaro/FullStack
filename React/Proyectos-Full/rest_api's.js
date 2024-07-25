/* 
  REST API
    Es un conjunto de reglas que permite que aplicaciones se comuniquen entre sí a través de la web
      REST = Representational State Transfer
      API = Application Programming Interface
    Puede ser diseñada en cualquier lenguaje que se ejecute por HTTP
    
    Request HTTP: GET, POST, PUT, PATCH, DELETE

    Tiene una forma ordenada y estructurada de poner a disposición los recursos de una base de datos

    Es una forma escalable y ordenada de crear un proyecto  
*/
/*
  Verbos HTTP
    Request HTTP: GET, POST, PUT, PATCH, DELETE

    GET Obtener Datos
    POST Enviar Datos / Creación
    PUT / PATCH Actualización
    DELETE Eliminar
  
  Endpoints
    Una REST API cuenta con Endpoints (o Urls) para hacer operaciones CRUD
      Listar Clientes GET /clientes
      Obtener un Cliente GET /clientes/10
      Crear un Cliente POST /clientes/
      Actualizar un Cliente PUT /clientes/3
      Eliminar un Cliente DELETE /clientes/8
*/
/*
  Herramientas
    Cualquier lenguaje que se ejecute en el servidor puede servir para crear una REST API
    Muchos frameworks soportan la creación de REST API's; Laravel, Express, Rails o Django
    Una base de Datos como MySQL, PostgreSQL o MongoDB
*/
/*
  PUT y PATCH
    PUT
      El método PUT se utiliza para actualizar o reemplazar completamente un recurso existente en un servidor web
      Cunado haces una solicitud PUT, estás diciendo al servidor que tome la informacion proporcionada y la utilice para reemplazar completamente el recurso en la ubicación especificada
    PATCH
      El método Patch se utiliza para realizar modificaciones parciales en un recurso existente en un servidor web
      En lugar de reemplazar completamente el recurso, como lo hace PUT, PATCH permite realizar cambios específicos en los datos del recurso sin afectar el resto de la información
*/
