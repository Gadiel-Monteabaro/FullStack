function factorialize(n) {
  let r = 1; // r = resultado
  for (let i = n; i > 0; i--) {
    r *= i;
  }
  return r
}

console.log(factorialize(4))

// devuelve el factorial del entero proporcionado