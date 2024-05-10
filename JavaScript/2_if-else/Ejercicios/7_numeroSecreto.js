let numeroSecreto = 25;
let respuesta = Number(prompt("¿Cual es el número secreto?"));

if (numeroSecreto == respuesta) {
  alert("Adivinaste el numero secreto.");
} else if (respuesta > 25) {
  alert("El numero ingresado es mayor que el numero secreto.");
} else if (respuesta < 25) {
  alert("El numero ingresado es menor que el numero secreto");
}
