//  La función debe devolver un arreglo. Las palabras no siempre están separadas por espacios y el arreglo no debe de contener signos de puntuación.
function splitify(str) {
  const newArray = str.split(/\W/);
  return newArray;
}

console.log(splitify("Hello World,I-am code"));

// ejemplo 1
const str = "Hello World";
const bySpace = str.split(" "); // [Hello, World]

// ejemplo 2
const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/); // [How, are, you, today];
