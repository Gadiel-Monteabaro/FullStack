/*
    Las Arrow Functions son una alternativa a la función clásica. Estas son incorporadas a partir de ES6 y se ven a menudo en dferentes ejemplos de internet.

    Una de sus ventajas es que su sintaxis es más compacta y flexible que las Funciones clásicas creadas con function.
*/
let sumar = (a, b) => {
  return a + b;
};

sumar(4, 2); //6

//Otra forma mas compacta

let sumar2 = (a, b) => a + b; //Si tenemos una sola linea de expresion dentro de nuestra funcion, no hacen faltas los corchetes.

/*
    📚 Resulta imporante entender que se tratan de funciones anónimas. En el ejemplo la igualamos a una variable "sumar" para luego ejecutarla.

    Las Arrow Functions son muy flexibles a la hora de codear. Su sintaxis se puede adaptar a cada caso.
*/

let saludar = (nombre) => {
  if (nombre) {
    return `¡Hola, ${nombre}!`;
  } else {
    return `¡Hola, anónimo!`;
  }
};
console.log(saludar()); // ¡Hola, anónimo!
console.log(saludar("Luis")); // ¡Hola, Luis!

let nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;

let exclamar = (str) => `str`;

let mayusculas = (str) => str.toUpperCase();

let minusculas = (str) => str.toLowerCase();
