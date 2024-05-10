/*
    En los while Loop también podemos evaluar condiciones usando cadenas de caracteres (en inglés Strings).
    los while Loop también pueden evaluar condiciones que sean Strings.
*/
let palabraMagica = "¡Ábrete, sésamo!";

let intento = prompt("Dígame, ¿cuál es la Palabra Mágica?");

while (intento != palabraMagica) {
  alert("Esa palabra es incorrecta");
  intento = prompt("Inténtelo nuevamente");
}
alert("¡Bienvenido a La Caverna De Los 40 Ladrones!");
