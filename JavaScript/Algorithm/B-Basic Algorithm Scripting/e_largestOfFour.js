function largestOfFour(arr) {
  let r = []; // r = resultado
  for (let i = 0; i < arr.length; i++) {
    let aAnidado = arr[i];
    let nMayor = -Infinity;
    for (let j = 0; j < aAnidado.length; j++) {
      if (aAnidado[j] > nMayor) {
        nMayor = aAnidado[j];
      }
    }
    r.push(nMayor);
  }
  return r;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

// devuelve un arreglo que consista en el mayor número de cada sub-arreglo proporcionado.
