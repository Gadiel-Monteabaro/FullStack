// Devuelve la diferencia simétrica de los dos arreglos.
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2) // [1, 2, 3, 5, 1, 2, 3, 4, 5]
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
