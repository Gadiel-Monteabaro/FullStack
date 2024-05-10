// Podemos crear funciones que tomen un número variable de argumentos.
// Estos argumentos se almacenan en un arreglo al que se puede acceder más tarde desde dentro de la función.

// aplicacion del parametro rest.
function howMany(...args) {
    console.log(args) // los argumentos se almacen dentro de un array
    return "You have passed " + args.length + " arguments."; // retornamos la cantidad de argumentos pasados a la funcion.
}

console.log(howMany(0, 1, 2));