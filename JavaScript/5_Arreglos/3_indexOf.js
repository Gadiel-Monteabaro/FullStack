/*
    El método indexOf() verifica la posición de un elemento dentro de un Arreglo y nos devuelve su Índice.

    Syntaxis - nombreArreglo.indexOf(elemento)
*/
let amigos = ["Juan", "Pepe", "Jorge", "Francisco", "Juan"]

amigos.indexOf("Pepe") // nos devuelve el índice 1.


amigos.indexOf("Juan") // devuelve la primera coincidencia, es decir, 0.

amigos.indexOf("Guille") // Devuelve -1 porque no hay un Guille en este arreglo.
amigos.indexOf("juan") // Devuelve -1 porque es "case sensitive"

//JavaScript es case sensitive, es decir, las mayúsculas y las minúsculas tienen codificaciones distintas. Por eso, el elemento que pasemos como Argumento tiene que ser exactamente el mismo que contenga el Arreglo.