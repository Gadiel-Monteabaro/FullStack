// Rellena la función urlSlug para convertir una cadena title y devolver la versión con guiones para la URL.
function url(title) {
  return title
    .split(" ")
    .filter((word) => (word !== "" ? word : null))
    .join("-")
    .toLowerCase();
}

url(" Winter Is  Coming"); // winter-is-coming
