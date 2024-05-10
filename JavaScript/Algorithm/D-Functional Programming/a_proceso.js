// La programación funcional es otro enfoque común en el desarrollo de software. En programación funcional, el código está organizado en funciones más pequeñas y básicas que se pueden combinar para construir programas de mayor complejidad.

// La programacion funcional, es un estilo de programacion que se basa en el uso de funciones puras y aisladas.

// Funciones de Primera Clase; Las funciones de primera clase son funciones que pueden asignarse como valores a variables, devolverse desde otras funciones y pasarse como argumentos a otras funciones. Todas las funciones de Js son de Primera Clase.

// Funciones CallBack; Las funciones callback son funciones que se pasan a otras funciones como argumentos y son llamadas por la función en la que se pasan.

// Funciones de Orden Superior (High Order Functions); Las funciones de orden superior son funciones que reciben otras funciones como argumentos o devuelven una función.

// Primer Principio; El primer principio de la programación funcional es evitar cambiar las cosas. Una función no debería cambiar nada, como una variable global.

// Segundo Principio; El segundo principio es que una función debe ser pura, lo que significa que no tiene efectos secundarios.(mutaciones), Esto nos permite obtener la misma salida para la misma entrada.

// Ejemplo
const edadLegalEnEEUU = 21;
const chequearEstadoLegal = (edad, edadLegal) => {
  return edad >= edadLegal ? "Mayor de edad." : "Menor de edad.";
};
const johnEstado = chequearEstadoLegal(18, edadLegalEnEEUU);
johnEstado; // Menor de edad.
edadLegalEnEEUU; // 21
