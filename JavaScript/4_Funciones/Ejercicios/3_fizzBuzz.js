/*
    En este ejercicio, deberás escribir una nueva versión de FizzBuzz (fizzBuzz2) que tome dos Strings como Argumento y reimplemente el FizzBuzz original. Elegí una palabra para cada String (palabra1 y palabra2) que reemplace a Fizz y a Buzz.
*/

function fizzbuzz2(palabra1, palabra2) {
  let hasta = parseInt(prompt("Ingrasar un Numero limite"));
  let fizzNum = parseInt(prompt("Ingrasar un Numero divisible por el mismo, para remplazar por palabra1"));
  let buzzNum = parseInt(prompt("Ingrasar un Numero divisible por el mismo, para remplazar por palabra2"));
  let mensaje = "";
  let i = 1;

  while (i >= 1 && i <= hasta) {
    if (!(i % fizzNum) && !(i % buzzNum)) {
      mensaje += `${palabra1} ${palabra2}, `;
    } else if (!(i % fizzNum)) {
      mensaje += `${palabra1}, `;
    } else if (!(i % buzzNum)) {
      mensaje += `${palabra2}, `;
    } else {
      mensaje += `${i}, `;
    }
    i++;
  }
  console.log(mensaje);
}

fizzbuzz2("Gadiel", "Silva");
