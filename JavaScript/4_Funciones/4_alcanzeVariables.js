/*
    Las Variables Globales son aquellas que están accesibles en todo el bloque de código de un programa.

    En cambio, las Variables Locales son accesibles solo en el ámbito de la Función donde fueron declaradas.
*/

let nombre = "Juan"; // nombre es una Variable Global

function saludar() {
  let apellido = "Lopez"; // apellido es una Variable Local
  console.log("Hola, " + nombre + " " + apellido);
}
saludar();

/*
    ⚠️Importante: Para poder reutilizar la Variable apellido deberíamos crearla por fuera de la Función saludar.
    🤓¿Sabías qué...?
    Una buena práctica en programación es definir todas las Variables Globales al principio de tu código.   
*/
