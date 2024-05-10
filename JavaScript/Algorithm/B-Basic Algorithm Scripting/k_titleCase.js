function titleCase(str) {
  let palabras = str.split(" ");
  let frase = "";
  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];

    for (let j = 0; j < palabra.length; j++) {
      if (j === 0) {
        frase += palabra[j].toUpperCase();
      } else {
        frase += palabra[j].toLowerCase();
      }
    }
    frase += " ";
  }

  return frase.trim(); // eliminamos el espacio final del string.
}

console.log(titleCase("sHoRt AnD sToUt"));

// Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas.

/* Esto devuelve el primer caracter de un string en mayusculas y el resto de las letras en minusculas.
  function titleCase(str) {
  let pLetra = str[0].toUpperCase();
  let p = '';
  for (let i = 1; i < str.length; i++) {
    p = `${p}${str[i]}`;
  }
    return `${pLetra}${p.toLowerCase()}`;
  }
*/
