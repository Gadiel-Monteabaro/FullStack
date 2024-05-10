function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let b = arr[i].indexOf(elem); // b = buscador
    if (b === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    13
  )
);

// cualquier arreglo anidado dentro de arr que contenga elem, sea eliminado.
