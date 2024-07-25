/*
    Un arreglo es un conjunto de datos que se encuentran ordenados, los datos pueden ser de cualquier tipo (Números, Strings, Funciones, etc.).
*/

let productos = ["iphone", "smart tv", "ipad"];
/*
    El Índice (del inglés Index) es la posición que ocupa un elemento dentro de un Arreglo
*/

let amigos1 = ["Juan", "Pepe", "Jorge", "Francisco"];

amigos1[0]; // Juan
amigos1[1]; // Pepe

amigos1.length; // 4
amigos1[amigos1.length - 1]; // Si queremos acceder al último elemento de un Arreglo, usamos length-1, que en este caso da como resultado "Francisco".

// Uso de los indices.

//Actualizar un valor
let amigos2 = ["Juan", "Pepe", "Jorge", "Francisco"]; // Esta es el Arreglo original.
amigos2[0] = "Juancito"; // Cambiamos "Juan" por "Juancito"
amigos2[3] = "Pancho"; // Cambiamos "Francisco" por "Pancho"
