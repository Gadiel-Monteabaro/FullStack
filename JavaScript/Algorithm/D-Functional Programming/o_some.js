// El metodo some, comprueba si algun elemento del array cumple con la condicion establecida.
function checkPositive(arr) {
  return arr.some((n) => n > 0);
}

console.log(checkPositive([1, 2, 3, -4, 5])); // true
