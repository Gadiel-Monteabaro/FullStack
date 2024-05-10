function findLongestWordLength(str) {
  let aWords = str.split(" "); // split, genera un string en un array
  let word = "";
  for (let i = 0; i < aWords.length; i++) {
    if (aWords[i].length > word.length) {
      word = aWords[i];
    }
  }
  return word.length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

// devuelve la cantidad de letras de la palabra mas larga de un string.
