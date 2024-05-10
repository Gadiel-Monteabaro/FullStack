// Realiza una búsqueda y reemplaza en la oración usando los argumentos proporcionados y devuelve la nueva oración.
function myReplace(str, before, after) {
  return str
    .split(" ")
    .map((item) => {
      if (item === before) {
        if (/^[A-Z]/.test(before)) {
          return (after = after[0].toUpperCase() + after.slice(1));
        } else {
          return (after = after[0].toLowerCase() + after.slice(1));
        }
      }
      return item;
    })
    .join(" ");
}

myReplace("Let us go to the store", "store", "mall");
