function truncateString(str, num) {
  let c = str.substring(0, num); // c = cadena
  if (str.length > num) {
    return (c += "...");
  }
  return c;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 20));

// recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento).
