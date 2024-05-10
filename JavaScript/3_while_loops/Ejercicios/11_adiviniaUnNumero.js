/*    
    Usá el método prompt para pedirle al usuario que ingrese un número (n), que esté entre el 1 y el 10.
    
    Usá parseInt(n) para convertir el String en un Number.
    
    Generá un número random entre 1 y el Valor ingresado por el usuario (n).
    
    Pedile al usuario que descubra cuál es el número generado al azar.
    
    Decile si acertó, si es mayor o si es menor.
    
    Repetí el proceso hasta que adivine el número.
    
    Cuando lo descubra, felicitalo y usá un contador que le indique cuántas oportunidades usó para adivinar el número correcto.

    ⚠️ Importante: si el input del usuario es NaN, el programa deberá pedirle que ingrese un número.
*/

let numInput;
let numRandom;
let numRespuesta;
let intentos = 1;
let volverJugar = "si";

while (volverJugar.toLowerCase() === "si") {
  numInput = parseInt(prompt("Ingresa un Número del 1 al 10."));
  numRandom = Math.ceil(Math.random() * numInput);
  numRespuesta = parseInt(
    prompt("Descubre cual es el número generado, Ingresa un número.")
  );

  while (numRespuesta !== numRandom) {
    if (numRespuesta > numRandom) {
      console.log(`El número ${numRespuesta} es mayor.`);
    } else if (numRespuesta < numRandom) {
      console.log(`El número ${numRespuesta} es menor.`);
    }
    intentos++;
    numRespuesta = parseInt(
      prompt("Casi Volve a intentarlo, Ingresa otro número.")
    );
  }

  console.log(
    `Felicitaciones el número es ${numRandom},hiciste ${intentos} intentos.`
  );

  volverJugar = prompt("¿Quieres volver a Jugar.?");

  intentos = 1;
}

console.log("Gracias por Jugar, nos veremos la proxima.");
