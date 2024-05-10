// Elimina todos los elementos del arreglo inicial que tengan el mismo valor que estos argumentos.
function destroyer(arr) {
  let aArgs = Object.values(arguments).slice(1);
  let newArray = arr.filter((el) => !aArgs.includes(el));

  return newArray;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);
