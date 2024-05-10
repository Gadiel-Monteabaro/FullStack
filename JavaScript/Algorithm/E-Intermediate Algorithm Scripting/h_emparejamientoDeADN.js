// El par de hebras del ADN esta formado por pares de nucleobases. Los pares de base son representados por los caracteres AT y CG, que forman bloques de doble hélix ADN.
function pairElement(str) {
  let newArray = [];
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "G":
        newArray.push(["G", "C"]);
        break;
      case "C":
        newArray.push(["C", "G"]);
        break;
      case "A":
        newArray.push(["A", "T"]);
        break;
      case "T":
        newArray.push(["T", "A"]);
        break;
    }
  }

  return newArray;
}

pairElement("ATCGA");

// Otra solucion.(No mia)
function pairElement(str) {
  // create object for pair lookup
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  // map character to array of character and matching pair
  return str.split("").map((x) => [x, pairs[x]]);
}
