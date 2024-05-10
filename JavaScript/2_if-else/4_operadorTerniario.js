/*
    El Operador Ternario es una manera de simplificar las estructuras condicionales de tipo If...else para escribirlas en una sola línea.  

    condicion ? lo que se ejecuta si es true : lo que se ejecuta si es false.
*/
let numeroDeTragos = 0;

numeroDeTragos > 0
  ? alert("Usted no puede manejar.")
  : numeroDeTragos > 5
  ? alert("No puedes seguir tomando")
  : alert("Puedes tomar tranquilamente");
