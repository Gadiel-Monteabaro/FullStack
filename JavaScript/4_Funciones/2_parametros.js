/*
  ¿Qué Es Un Parámetro?
  Un Parámetro es una Variable que creamos al momento de definir una Función y, cada vez que la ejecutamos, le pasamos un argumento(su valor) como input.
  Cuando le pasamos un Parámetro a una Función estamos haciendo un código mucho más escalable.

  En otras palabras.
  Los parámetros son variables que actúan como marcadores de posición para los valores que deben ser introducidos en una función cuando se llama. 
  Los valores reales que son introducidos (o "pasados") a una función cuando se llama son conocidos como argumentos.
*/
function areaCuadrado(lado) {
  console.log(lado * lado);
}

areaCuadrado(2); //4

//Ahora, cuando ejecutamos areaCuadrado le pasaremos por Parámetro un valor que reemplace a lado.

//Funciones Con Múltiples Parámetros
function areaTriangulo(base, altura) {
  console.log((base * altura) / 2);
}

areaTriangulo(25, 10);

//Funciones Con Variables como Parámetros
function cantarCumple(persona) {
  console.log("¡Que los cumplas feliz, " + persona + "!");
}

let nombre = prompt("¿Quién cumple años hoy?");
cantarCumple(nombre);

//Parametros por Default
let suma = (a = 0, b = 0) => {
  return a + b;
};
console.log(suma()); // retorna 0
