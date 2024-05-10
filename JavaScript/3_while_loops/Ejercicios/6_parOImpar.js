//En este ejercicio deberás crear un programa que le pregunte al usuario un número y que le devuelva un mensaje que indique si es par o impar. El programa terminará si el usuario ingresa un 0 o un número negativo.

let num = Number(
  prompt("Para que el programa funciones. Ingresa un número positivo y entero.")
);

while (num > 0) {
  if (!(num % 2)) {
    console.log(`El número ingresado ${num}; es Par.`);
  } else {
    console.log(`El número ingresado ${num}; es Impar`);
  }
  num = Number(
    prompt(
      "Para que el programa funciones. Ingresa un número positivo y entero."
    )
  );
}

console.log(`El número ingresado es ${num}, no es valido.`);
