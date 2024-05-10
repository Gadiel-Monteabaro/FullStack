// Escribe una función que tome dos o más arreglos y devuelve un nuevo arreglo de valores únicos manteniendo el orden original de los arreglos proporcionados.
function uniteUnique(arr) {
  let newArray = [];
  for (let i = 0; i < arguments.length; i++) {
    const arrayArguments = arguments[i];
    for (let j = 0; j < arrayArguments.length; j++) {
      let itemValue = arrayArguments[j];

      if (newArray.indexOf(itemValue) < 0) {
        newArray.push(itemValue);
      }
    }
  }
  return newArray;
}

uniteUnique([1, 3, 5], [1, 5, 3, 4], [5, 2]);
