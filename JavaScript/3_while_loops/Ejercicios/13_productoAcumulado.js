/*
    Escribí un while Loop que, dado un número elegido por vos previamente, calcule el producto de todos los enteros positivos entre 1 y ese número.
    Al terminar el While, imprimí el resultado por consola.

    Ejercicio Nivelatorio: Este ejercicio es similar a los de preparación para el Coding Challenge. No te preocupes si necesitás dedicarle más tiempo.
*/
//Si elegiste el número 3, el resultado será 1 x 2 x 3 --> 6.
let num = parseInt(prompt("Ingresar un número."));
let i = 1;
let ac = 1;

while (i <= num) {
  ac *= i;
  i++;
}

console.log(ac);
