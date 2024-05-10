//Ingresr un numero, y determinar mediante un programa si es par o impar.
let numero1 = parseFloat(prompt("Ingrese un numero"));

if (numero1 % 2 === 0) {
  console.log("El numero ingresado es PAR");
} else {
  console.log("El numero ingresado es IMPAR");
}

//Mismo ejercicio pero realizado con operador ternario.
let numero = parseFloat(prompt("Ingrese un numero"));

numero % 2 === 0
  ? console.log("El numero ingresado es PAR")
  : console.log("El numero ingresado es IMPAR");
