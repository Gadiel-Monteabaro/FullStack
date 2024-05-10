/*
    Para manipular los Arreglos podemos usar los Métodos de Arreglo (del inglés, Array Methods).
*/

/*
    Methodo Push(), Para agregar elementos al final de nuestro Arreglo- sin necesidad de saber cuál es el último Índice-, usaremos el método push().

    nombreDelArreglo.push()
    .push(valor1, valor2)
*/
let colores = ["rojo", "verde", "azul"]

colores.push("amarillo") //Agregara amarillo al final del array, sin importar el ultimo indice del mismo.

/*
    Método pop(), .pop() no solo quita el último elemento del Arreglo, sino que también lo devuelve.
*/

let numbers = [] // Inicializamos un Arreglo vacío para que tenga los métodos de un Arreglo, aunque no tenga elementos.

numbers.push(2) // Agrega 2 al Arreglo.
numbers.push(4, 5, 7) // Agrega 4, 5 y 7 después del 2.

numbers.pop() // Quita el último elemento.

7 // En este caso es el 7, y lo retorna.

let ultimoNumero = numbers.pop();

console.log(ultimoNumero);// En este caso nos guardara el numero 5, ya que el 7 no lo guardamos y por lo tanto se perdio.

/*
    Metodo unshift(), sirve para agregar elementos al comienzo de nuestro Arregl.
*/

/*
    Metodo shift(), en cambio, quita los elementos que estén al comienzo de la posición y los retorna.
    Si querés reutilizar el valor que retorna shift, guardalo en una Variable.
*/

let numerosPrimos = [7, 11, 13, 17]
numerosPrimos.unshift(5)
// [5, 7, 11, 13, 17]
numerosPrimos.unshift(1, 2, 3)
// [1, 2, 3, 5, 7, 11, 13, 17]

let noEsUnNP = numerosPrimos.shift() // 1
// [2, 3, 5, 7, 11, 13, 17]
