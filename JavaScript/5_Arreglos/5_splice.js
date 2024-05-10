/*
    El método .splice() elimina de un Arreglo una cantidad de elementos a partir de una posición dada.

    Syntaxis - nombreArreglo.splice(argumento1,argumento2)

    En este método, el argumento1 determinará el Índice a partir del cual quiero remover los elementos (incluyendo esa posición). Por su parte, el argumento2 establecerá la cantidad de elementos que quiero remover.
*/
let puntajes = [1, 7, 0, 8, 4, 9]
puntajes.splice(2, 3) // Método aplicado.

/*
    Con .splice() podés:

    Eliminar elementos desde la posición elegida y, al mismo tiempo, añadir otros en ese lugar.
    Añadir elementos desde una posición determinada sin necesidad de eliminar nada.

    Syntaxis - nombreArreglo.splice(argumento1,argumento2,argumento3)

    En este caso, el argumento3 indica el elemento nuevo a incorporar.
*/
let puntos = [1, 7, 0, 8, 4, 9]
puntos.splice(5, 1, 6) // Elimina el valor de la posición 5 y agrega, en su lugar, el número 6.
puntos
[1, 7, 0, 8, 4, 6] // Reemplazó el número 9 por el 6.

/*
    En cambio, si queremos añadir elementos desde una posicion en particular, sin eliminar ningun otro.

    Syntaxis - nombreArreglo.splice(argumento1,0,argumento3)

    En este caso, el 0 indica que no estoy eliminando ningún elemento y, argumento3 indica los elementos nuevos a incorporar desde la posición dada por argumento1.
*/
let points = [1, 7, 0, 8, 4, 9]
points.splice(1, 0, 4)
points // Si llamamos a puntajes, nos devolverá el nuevo Arreglo con el número 4 en posición 1.
[1, 4, 7, 0, 8, 4, 9]