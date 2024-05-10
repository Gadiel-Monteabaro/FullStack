/*
    En este ejercicio, deberás usar el método prompt para que el usuario ingrese 2 números distintos. Tu programa los evaluará y le responderá cuál es el mayor.

    ⚠️Importante: Si los números son iguales, deberá mostrar un mensaje para que ingrese un número distinto.

    El programa finalizará cuando alguno de los 2 números sea "0".
*/

let num1 = parseFloat(prompt("Ingresar un Número aleatorio."));

let num2 = parseFloat(prompt("Ingresar otro Número aleatorio."));

while (num1 !== 0 && num2 !== 0) {
  if (num1 > num2) {
    console.log(`El número ${num1} es mayor a ${num2}`);
  } else if (num1 < num2) {
    console.log(`El número ${num2} es mayor a ${num1}`);
  } else {
    alert("Ingresaste dos Números iguales. Intentalo de nuevo.");
  }

  num1 = parseFloat(prompt("Ingresar un Número aleatorio."));
  num2 = parseFloat(prompt("Ingresar otro Número aleatorio."));
}

console.log(
  "Uno de los dos numeros ingresado es igual a 0, el programa se detuvo."
);
