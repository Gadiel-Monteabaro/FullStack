/*
    El while Loop lo re-evalúa repetidas veces y ejecuta su bloque de código hasta que la condición deja de ser verdadera.

    ⚠️ Importante: Este código se va a ejecutar siempre que el resultado sea true. Cuando la condición sea false, saldremos del bucle, evitando entrar en lo que se conoce como un Loop Infinito.
*/
while (unaCondicion) {
  //Ejecuta este código
  // Hace algo para que la condición eventualmente se deje de cumplir
}

let pasajero = 1;
while (pasajero <= 20) {
  console.log("Puede pasar, su asiento es el: " + pasajero);
  pasajero++;
  // 🛎️ Recordá: Escribir primero la medida de seguridad (la línea de código que modificará a la Variable) te evitará caer en un Loop Infinito. En este ejemplo es i++.
}

/*
    Los Loops Infinitos ocurren cuando la condición de un while Loop nunca es falsa. Por lo tanto, el código corre indefinidamente y se cuelga el programa.
*/
let x = 0;
while (x < 10) {
  return;
  console.log(x);
}
