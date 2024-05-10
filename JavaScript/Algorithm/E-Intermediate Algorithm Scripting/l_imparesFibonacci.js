// Dado un entero positivo num, devuelve la suma de todos los números impares de Fibonacci que son menores o iguales a num.
function sumFibs(num) {
  let fib = [0, 1];
  let total = 0;
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  for (let i = 0; i < fib.length; i++) {
    if (fib[i] % 2 && fib[i] <= num) {
      total += fib[i];
    }
  }
  return total;
}

sumFibs(10);
