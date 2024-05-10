/*
    JavaScript es un lenguaje creado por Brendan Eich, ex desarrollador de Netscape. En menos de un año, este lenguaje evolucionó de Mocha a LiveScript hasta que, en diciembre de 1995, se lo renombró como JavaScript.

    En noviembre del año siguiente, Netscape postuló a JavaScript en ECMA International, una organización que estandariza los lenguajes de programación. A partir de allí, en junio de 1997 surgió un nuevo lenguaje: ECMAScript.

    ES es una abreviación de ECMAScript. Siempre que vemos ES seguido de un número, se está hablando de qué versión es.

    ES13 / ES2022: 2022.

*/

/*
    Los Template Literals son una nueva forma de crear Strings.
    Básicamente, son Strings que permiten expresiones y soportan tanto una línea de código simple como una múltiple.
*/
// ES6
let mensaje = `
 <div>
   <p>¡Hola!</p>
 </div>
`;

/*
Los Template Literals también nos permiten escribir expresiones conocidas como interpolación de Strings.

Interpolación De Strings: Sintaxis
Para crearlas, usá el signo de moneda ($), abrí una llave ({), escribí la Variable u operación que quieras incluir y cerrá la llave (}):

`string ${variable u operación}`
*/
//De la forma antigüa
var nombre = "Gabriela";

var saludo = "¡Hola, " + nombre + "!";

console.log(saludo); // ¡Hola, Gabriela!

//De la nueva forma
let nombre = "Gabriela";

let saludo = `¡Hola, ${nombre}!`;

console.log(saludo); // ¡Hola, Gabriela!
