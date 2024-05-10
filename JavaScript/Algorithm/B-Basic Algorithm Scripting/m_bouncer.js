function bouncer(arr) {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      a.push(arr[i]);
    }
  }
  return a;
}

console.log(bouncer([7, "ate", "", false, 9]));

// elimina todos los valores falsos de un arreglo. Devuelve un nuevo arreglo
