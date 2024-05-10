// Crea una función que busque a través de un arreglo de objetos (primer argumento) y devuelva un arreglo de todos los objetos que tengan pares de nombre y valor coincidentes (segundo argumento)
function whatIsInAName(collection, source) {
  let sourcesKeys = Object.keys(source);

  return collection.filter((obj) => {
    for (let i = 0; i < sourcesKeys.length; i++) {
      if (obj[sourcesKeys[i]] !== source[sourcesKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName(
  [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, cookie: 2 }
);
