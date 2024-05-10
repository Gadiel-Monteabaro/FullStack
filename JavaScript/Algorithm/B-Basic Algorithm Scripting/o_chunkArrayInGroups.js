function chunkArrayInGroups(arr, size) {
  let arrB = []; // arrB = arreglo bidimensional.
  for (let i = 0; i < arr.length; i += size) {
    let r = arr.slice(i, i + size);
    arrB.push(r);
  }

  return arrB;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));

// escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.
