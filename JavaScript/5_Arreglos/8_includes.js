/*
    El includes()método devuelve true si una matriz contiene un valor especificado.

    El includes()método regresa falsesi no se encuentra el valor.

    El includes()método distingue entre mayúsculas y minúsculas.
*/

var amigos = ["francisco", "walter", "josue", "facundo"];

console.log(amigos.includes("francisco"));
console.log(amigos.includes("Jorge"));
console.log(amigos.includes("Walter".toLowerCase()));
