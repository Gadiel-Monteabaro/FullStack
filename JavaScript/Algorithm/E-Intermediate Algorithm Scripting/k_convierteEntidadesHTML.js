// Convierte los caracteres &, <, >, " (dobles comillas), y ' (apóstrofo), en un cadena con su correspondiente entidad HTML.
function convertHTML(str) {
  return str
    .split("")
    .map((item) => {
      switch (item) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"':
          return "&quot;";
        case "'":
          return "&apos;";
        default:
          return item;
      }
    })
    .join("");
}

convertHTML("Sixty > twelve");
