/*
    En este ejercicio deberás crear un programa que le pida al usuario que ingrese un número entero. El programa terminará cuando se ingrese un número negativo.

    Al terminar, mostrale un mensaje con la cantidad de números positivos que ingresó.
*/

let num = Number(prompt("Ingresar un Número entero positivo")),
  contador = 0;

while (num > 0) {
  contador++;
  num = Number(prompt("Ingresar un Número entero positivo"));
}

console.log(`La cantidad de números ingresados es ${contador}.`);
