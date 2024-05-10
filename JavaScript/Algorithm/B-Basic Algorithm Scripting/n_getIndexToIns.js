function getIndexToIns(arr, num) {
  let sortedArray = arr.sort((a, b) => a - b); // ordenamos el array  

  for (let i = 0; i < sortedArray.length; i++) {
    if (num > arr[i - 1] && num <= arr[i]) {
      return i;
    }
  }

  if (sortedArray[sortedArray.length - 1] < num) {
    return sortedArray.length;
  }

  return 0;
}

console.log(getIndexToIns([5, 3, 10, 50, 14], 60));

// devuelve el índice mas bajo en el que un valor(segundo argumento) debe ser insertado en un arreglo(primer argumento) una vez que éste haya sido ordenado.El valor devuelto debe ser un número.