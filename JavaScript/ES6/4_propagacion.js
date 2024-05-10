// ...arr devuelve un arreglo desempacado. En otras palabras, propaga el arreglo. Sin embargo, el operador de propagación sólo funciona en el lugar, como en un argumento de función o en un arreglo literal.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus) // devuelve el valor maximo de nuestro arr

//
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; // creamos una copia de arr1 a arr2
console.log(arr2);