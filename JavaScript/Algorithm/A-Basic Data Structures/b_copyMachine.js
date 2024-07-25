function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]); // operador de propagacion (copia).
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));
// función devuelve un nuevo arreglo compuesto por num copias de arr.
