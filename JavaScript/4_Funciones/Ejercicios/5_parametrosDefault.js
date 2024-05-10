//En este ejercicio deberás agregar Parámetros por default a la Función, para que al ejecutarla no devuelva ningún error.

const longitudDelNombre = (nombre = "") => nombre.length;

console.log(longitudDelNombre()); // 0
console.log(longitudDelNombre("Ana")); // 3

//En este ejercicio deberás refactorizar la Función para obtener el mismo resultado usando un código más reducido.
const saludarVisitanteWeb = (nombreUsuario = "anónimo") => `¡Hola, ${nombreUsuario}!`;

console.log(saludarVisitanteWeb()); // ¡Hola, anónimo!
console.log(saludarVisitanteWeb("José")); // ¡Hola, José!
