function confirmEnding(str, target) {
  let targetLength = target.length;
  let match = str.slice(str.length - targetLength, str.length); // slice, no modifica el str original.

  let result = match === target ? true : false; // Operador Ternario

  return result;
}

console.log(confirmEnding("hola", "la"));

// Aclaracion!!!! => este ejercicio puede resolverse con el metodo .endsWith()

// evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target).
