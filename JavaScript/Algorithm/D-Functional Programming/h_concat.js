// Combinar dos elementos utilizado el metodo concat, el metodo concat devuelve un nuevo arreglo.
function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}

const first = [1, 2, 3];
const second = [4, 5];

console.log(nonMutatingConcat(first, second));

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
