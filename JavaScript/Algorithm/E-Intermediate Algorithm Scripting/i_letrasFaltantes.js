// Encuentra la letra que falta en la siguiente cadena de letras y devuélvela.
function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing;

  str.split("").forEach((letter) => {
    console.log(letter.charCodeAt(0));
    if (letter.charCodeAt(0) === currCharCode) {
      currCharCode++;
    } else {
      missing = String.fromCharCode(currCharCode);
    }
  });

  return missing;
}

console.log(fearNotLetter("abcdeg"));
