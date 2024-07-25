/*
  Testing API's
    Testing en Node.js
      Unit Testing
        Verificar que partes individuales en nuestro código funcionen; tales como el servidor, visitar una ruta, debemos revisar que cada pieza funcione como esperamos antes de integrarla con otras

      Integration Testing
        Una vez que revisamos que algunas piezas de código funcionen por si solas, es momento de revisar cuando 2 o más se unen, tales como visitar una ruta y obtener datos, o enviar una petición post, validar, y entonces crear el producto
*/
/*
  Herramientas Testing API's
    Jest
      Es un Framework para aplicar testing, funciona con TypeScript, Node.js, React
      La configuración es muy simple, los test corren aparte y no se mezclan con el código existente
    
    SuperTest
      Podremos realizar peticiones hacia nuestra API y revisar que el código funcione como esperamos 
      Pruebas de integración entre las URL's de nuestra API y el ORMN
*/
/*
  Code Coverage - Covertura de Código
    Es una métrica utilizada para medir la cantidad de código fuente que ha sido ejecutado o cubierto por un conjunto de pruebas
    
    Mide qué procentaje de código de un programa ha sido probado. Cuanto mayor sea la cobertura de código, más exhaustivas son las pruebas, lo que a menudo se considera un indicador positivo de la calidad del software

  Métrica
    < 60 - No es suficiente - Añadir pruebas adicionales
    60 - 80 - Buenas metricas - Se puede mejorar
    >= 80 - Es suficiente - código por lo general aprobado
    100 - Ideal - Poco probable
*/
