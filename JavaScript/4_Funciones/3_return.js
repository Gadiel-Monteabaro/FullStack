/*
    La keyword return se usa al declarar una Función para devolver un valor específico de ella.

    ⚠️Importante: Al usar esta palabra reservada se da por finalizada la ejecución de la Función, independientemente de la extensión del bloque de código.
*/
function cuadrado(numero) {
  return numero * numero;
}
console.log("El resultado de 4 al cuadrado es: " + cuadrado(4));

let resultado = cuadrado(5); //  Con el keyword return tomamos el resultado de la operación para, luego, reutilizarlo y lograr que la Función nos devuelva el valor del cuadrado de un número.

function porDos(numero) {
  console.log(numero * numero);
}

let resultado2 = porDos(4); // No estoy guardando un numero, estoy ejecutando la función que me imprime  por consola.
