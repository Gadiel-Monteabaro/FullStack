/*
    En este ejercicio, deberás crear una Función factorial que reciba un número y devuelva el factorial de este número.

    Por ejemplo, si hacemos factorial(5) la Función deberá hacer la operación 5x4x3x2x1 y devolver el resultado: 120.
*/

function factorial(num) {
  let ac = 1;
  let i = 1;

  if (num === 0) {
    console.log(1);
  } else {
    while (i >= 1 && i <= num) {
      ac *= i;
      i++;
    }
    console.log(ac);
  }
}
factorial(5);
