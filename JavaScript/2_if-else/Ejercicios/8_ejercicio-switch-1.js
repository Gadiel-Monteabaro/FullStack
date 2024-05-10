/*
    Usando la estructura switch(), creá un programa en el que, si un usuario ingresa "casa", "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma inglés.

    En caso de que la palabra sea distinta a la esperada, mostrale un mensaje que le informe que la palabra ingresada es incorrecta.

*/
let palabra = prompt("Ingresar una palabra");

switch (palabra) {
  case "perro":
    console.log("dog");
    break;
  case "casa":
    console.log("house");
    break;
  case "pelota":
    console.log("ball");
    break;
  case "arbol":
    console.log("tree");
    break;
  case "genio":
    console.log("genius");
    break;
  default:
    console.log("La palabra ingresada, no fue posible traducir");
}
