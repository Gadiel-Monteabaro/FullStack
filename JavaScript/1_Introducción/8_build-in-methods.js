/*
    Los Built-in-Methods son Funciones pre-armadas de JavaScript para que usemos en nuestros programas.

    Una Función en JavaScript es un conjunto de instrucciones que realiza una tarea o calcula un valor. Debe tomar alguna entrada y devolver una salida donde haya alguna relación obvia entre ambas.   
*/

//Alert: es una Función que muestra un mensaje al usuario. Antes de hacerlo, evalúa lo que está adentro (por ejemplo, si es una operación matemática, si es un String o si tiene que combinar una Variable con algún otro dato).
alert("Hola, ¡bienvenido a mi página!"); 
// alert con String

alert(3 + 4); 
// alert con Operación Matemática

let nombre1 = "Diego";
alert("Mi nombre es " + nombre1); 
// alert con String y Variable

//Console.log: es una Función que imprime un mensaje en la consola. Si bien es una forma sencilla de evaluar código, su verdadera utilidad se encuentra al incorporarlo desde un archivo.
console.log("¡Hola!"); 
// console.log de String

console.log(2 + 2); 
// console.log de Operación Matemática

let nombre2 = "Juli";
console.log("Mi nombre es " + nombre2); 
// console.log con String y Variable

//Prompt: Es una Función que nos devuelve un valor que le pregunta previamente al usuario. Es especialmente útil para tomar un input, combinarlo con una Variable y manipular ese valor. Podés guardarlo, mostrarlo, recuperarlo o combinarlo con otras Variables.
let user = prompt("¿Cuál es tu nombre?");

//Lo primero que hará el programa es resolver todo lo que esté entre paréntesis. En este caso, ejecutará el prompt. Luego, concatenará la respuesta con el resto de los Strings para, por último, mostrar el mensaje de alert en la pantalla.
alert("Hola, " + prompt("¿Cuál es tu nombre?") + ", espero que estés bien.");
