function quickCheck(arr, elem) {
  let b = arr.indexOf(elem); // b = buscador
  if (b > -1) {
    return true;
  }
  return false;
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

// Verifica si un elemento se encuentra dentro de un arreglo.
