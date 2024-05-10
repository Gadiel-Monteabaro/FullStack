/*
    1-Le pida al usuario que ingrese uno de estos valores: "Piedra", "Papel" o "Tijera".
    2-Elija un valor al azar usando Math.random ().
    3-Le diga al usuario quién ganó.
*/

//0=piedra
//1=papel
//2=tijera

let valorIngresado,
  pregunta = "si",
  aleatorio;

while (pregunta.toLowerCase() === "si") {
  valorIngresado = prompt("Elige entre Piedra, Papel y Tijeras.");
  aleatorio = Math.floor(Math.random() * 3);

  if (valorIngresado.toLowerCase() === "piedra" && aleatorio === 0) {
    console.log(
      `Elegiste ${valorIngresado} y la computadora eligio Piedra. Resultado: EMPATE.`
    );
  } else if (valorIngresado.toLowerCase() === "piedra" && aleatorio === 1) {
    console.log(
      `Elegiste ${valorIngresado} y la computadora eligio Papel. Resultado: PERDISTE.`
    );
  } else if (valorIngresado.toLowerCase() === "piedra" && aleatorio === 2) {
    console.log(
      `Elegiste ${valorIngresado} y la computadora eligio Tijera. Resultado: GANASTE.`
    );
  }

  if (valorIngresado.toLowerCase() === "tijera" && aleatorio === 0) {
    console.log(
      `Elegiste ${valorIngresado} y la computadora eligio Piedra. Resultado: PERDISTE.`
    );
  } else if (valorIngresado.toLowerCase() === "tijera" && aleatorio === 1) {
    console.log(
      `Elegiste ${valorIngresado} y la computadora eligio Papel. Resultado: GANASTE.`
    );
  } else if (valorIngresado.toLowerCase() === "tijera" && aleatorio === 2) {
    console.log(
      `Elegiste ${valorIngresado} y la computadora eligio Tijera. Resultado: EMPATE.`
    );
  }

  if (valorIngresado.toLowerCase() === "papel" && aleatorio === 0) {
    console.log(
      `Elegiste ${valorIngresado} y la computadora eligio Piedra. Resultado: GANASTE.`
    );
  } else if (valorIngresado.toLowerCase() === "papel" && aleatorio === 1) {
    console.log(
      `Elegiste ${valorIngresado} y la computadora eligio Papel. Resultado: EMPATE.`
    );
  } else if (valorIngresado.toLowerCase() === "papel" && aleatorio === 2) {
    console.log(
      `Elegiste ${valorIngresado} y la computadora eligio Tijera. Resultado: PERDISTE.`
    );
  }

  pregunta = prompt("¿Otro Intento?");
}

alert("Gracias por Jugar.");
