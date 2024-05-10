/*
    La recursion; es el concepto que una funcion puede expresarse en terminos de si misma.     
*/

//Funcion con Bucle
function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
}

//Funcion Recursiva.
function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}

/*
   Nota: Las funciones recursivas deben tener un caso base cuando devuelven sin tener que llamar a la función de nuevo (en este ejemplo, cuando n <= 0), de lo contrario nunca podrán terminar de ejecutarse.
*/

//Ejemplo de recursividad con Factorial
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

//Mismo ejemplo pero con Arrow Function.
const factorialArrow = n => (n <= 1 ? 1 : n * factorial(n - 1));

/*
    Hemos definido una función llamada rangeOfNumbers con dos parámetros. La función debe devolver un arreglo de enteros que comienza con el número representado por el parámetro startNum y termina con el número representado por el parámetro endNum. El número inicial será siempre menor o igual que el número final. Tu función debe utilizar recursión, llamándose a sí misma, y no utilizar bucles de ningún tipo. También debe funcionar en el caso que startNum y endNum sean iguales.
*/

function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [endNum]
    } else {
        let arr = rangeOfNumbers(startNum + 1, endNum)
        arr.unshift(startNum);
        return arr;
    }
};