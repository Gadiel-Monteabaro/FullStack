function mutation(arr) {
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (first.indexOf(letter) === -1) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["Mary", "Army"]));

// devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.
