/*
  La Coerción de datos se refiere a la acción de forzar a que un dato se comporte como si fuera de otro tipo. Siempre se convertirán en los siguientes tres tipos: String, booleano o numérico.   
*/
/*
  Función parseInt
  Una Función que sirve para manipular datos es parseInt. Esta Función convierte un String en un number.

  ⚠️ Importante: parseInt toma únicamente los números enteros.
*/
let edad = parseInt(prompt("Ingrese su edad"));
// El usuario ingresará un String con su edad y ParseInt lo convertirá en un número.

let cumpleaños = edad + 1;
// Se define una Variable con una operación matemática para saber cuántos años tendrá en un año.

alert("En un año tendrás " + cumpleaños + " año de edad");
// Le darás un mensaje con la respuesta.

/*
  Función Number
  Number: Se usa para convertir un String en un número y admite también los decimales.
  Esta Función sólo lee caracteres numéricos. Si le pasamos otro tipo de caracter como Argumento, nos devolverá la expresión "NaN" (del inglés "Not a Number"; es decir, "No es un Número").
*/
Number("4");
4;
// Pasa el String "4" a un número 4.

Number("4.5");
4.5;

/*
  Función parsefloat
  parseFloat: Convierte un String en un number y admite los decimales. A diferencia de la Función Number, deja de traducir cuando encuentra un caracter no numérico.    
*/
parseFloat("4.5$");
4.5;
//⚠️ Importante: Si el caracter no numérico está previo al número, no lo reconocerá porque su parseo terminará en ese momento.
parseFloat("$4.5");
NaN;
