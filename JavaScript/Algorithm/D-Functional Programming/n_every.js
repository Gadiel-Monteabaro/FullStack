// Utiliza el método every dentro de la función checkPositive para comprobar si cada elemento en arr es positivo
function checkPositive(arr) {
  return arr.every((n) => n > 0);
}

console.log(checkPositive([1, 2, 3, -4, 5]));
