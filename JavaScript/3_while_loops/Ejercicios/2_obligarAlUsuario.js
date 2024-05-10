let usuario = prompt("Escriba su nombre, Por Favor");

while (usuario === "") {
  alert("Por Favor, rellenar el campo correspondiente");
  usuario = prompt("Por Favor, Intentelo de nuevo.");
}

console.log(`Bienvenido ${usuario}`);
/*
    🛎 Recordá: Un String vacío siempre es falso. Por lo tanto, podemos convertirlo en verdadero al negarlo con el signo de exclamación (!)
*/

let input;

while (!(input = prompt("Escriba su nombre, por favor."))) {
  alert("No recibimos la información.");
}

alert("¡Gracias! Su nombre es: " + input + ".");
