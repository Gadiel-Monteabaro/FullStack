function reverseString(str) {
  let c = ""; // c = cadena invertida
  for (let i = str.length - 1; i > -1; i--) {
    c += str[i];
  }
  return c;
}

console.log(reverseString("hello"));

// invertir la cadena proporcionada y devolver la cadena invertida.
