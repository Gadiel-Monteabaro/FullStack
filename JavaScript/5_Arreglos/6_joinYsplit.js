/*
    El método join() convierte un Arreglo en una cadena de caracteres. Mientras que split() convierte una cadena de caracteres en un Arreglo.

    Analicemos el método join() pasándole distintos datos como Argumento:
*/
let arr = ["Hola", "Mery"]
arr.join()// No le pasamos nada como Argumento. 
"Hola,Mery"// Separa los elementos del Arreglo por una coma.


let arr1 = ["Hola", "Mery"]
arr1.join("")
"HolaMery"

let arr2 = ["Hola", "Mery", "¿cómo", "estas?"]
arr2.join(" ") // Le pasamos como Argumento un espacio.
"Hola Mery ¿cómo estas?" // Nos devuelve un String con los datos separados por espacios.
/*
    Cuando hacemos join() no modificamos el Arreglo original sino que tomamos sus elementos y los manipulamos.
*/

/*
    En cambio, el método split(), separa un String y lo convierte en un Arreglo con sus distintas posiciones.
*/

let cadena = "Hola Mery"
let arr3 = cadena.split(" ")// Le indicamos dónde hacer el corte. En este caso, en donde haya un espacio.
console.log(arr3)
["Hola", "Mery"] // Retorna un Arreglo con los Strings separados en cada posición.

let cadena1 = "Hola Mery"
let arr4 = cadena.split("e")// Le indicamos dónde hacer el corte. En este caso, la letra "e".
console.log(arr4)
["Hola M", "ry"] // JS buscará, primero, si existe ese caracter en la cadena. Luego, lo eliminara y, por último, me devolverá el Arreglo separando sus elementos por dónde estaba ese caracter.