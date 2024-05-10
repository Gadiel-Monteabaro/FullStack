/*
    ¿Qué Es El Objeto Math?
    El Objeto Math contiene Propiedades y Métodos relacionados a Matemática.
*/
Math;
Math.PI;
Math.E;
Math.pow(9, 2);
Math.random(); //devuelve un número de coma flotante pseudo-aleatorio, comprendido en el rango de 0 a menor que 1.
Math.floor(7.2);
Math.ceil(7.2);
Math.ceil(Math.random() * 10);
Math.floor(Math.random() * 10);
//Existen muchas mas propiedades relacionadas con las matematicas con el objeto Math.


// Generar un numero entre un min y max establecidos como argumentos.
function randomRange(myMin, myMax) {
    // Cambia solo el código debajo de esta línea
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Cambia solo el código encima de esta línea
}
console.log(randomRange(0, 100))
