// Devuelve la suma de estos dos números más la suma de todos los números entre ellos.
function sumAll(arr) {
  let sum = 0;
  for (let i = Math.max(...arr); i >= Math.min(...arr); i--) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));
