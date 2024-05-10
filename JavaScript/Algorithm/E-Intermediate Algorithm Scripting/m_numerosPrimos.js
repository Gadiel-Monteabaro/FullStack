// Reescribe sumPrimes para que devuelva la suma de todos los números primos que sean menores o iguales a num.
function sumPrimes(num) {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    arr.push(i);
  }
  return arr.filter((el) => primo(el)).reduce((ac, el) => ac + el, 0);
}

function primo(numero) {
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero !== 1;
}

sumPrimes(10);
