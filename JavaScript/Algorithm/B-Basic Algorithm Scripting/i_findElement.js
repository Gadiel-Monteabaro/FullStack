function findElement(arr, func) {
  let n; // n = numero
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    n = func(arr[i]);
    if (n === true) {
      a.push(arr[i]);
    }
  }
  return a;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

// devuelve los valores que cumplan con funcion pasada como argumento.
