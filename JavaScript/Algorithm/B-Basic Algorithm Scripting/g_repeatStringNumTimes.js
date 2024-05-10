function repeatStringNumTimes(str, num) {
  let c = ""; // c = cadena
  while (num > 0) {
    c += str;
    num--;
  }
  return c;
}

console.log(repeatStringNumTimes("*", 8));

// repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento).

function repeatSring(str, num) {
  return str.repeat(num); // podemos resolver este ejercicio con el metodo repeat.
}

console.log(repeatSring(".", 8));
