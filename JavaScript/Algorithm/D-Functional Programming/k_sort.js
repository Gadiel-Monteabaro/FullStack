function alphabeticalOrder(arr) {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });
}
// ordena los elementos de un array, alfabeticamente de menor a mayor.
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  const newArray = arr.slice(0);

  return newArray.sort((a, b) => a - b);
}
// Ordena la entrada de un arreglo sin modificar el arreglo original.
nonMutatingSort(globalArray);
