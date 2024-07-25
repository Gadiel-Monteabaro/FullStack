/*
    Las Funciones Condicionales de JavaScript son una herramienta que posibilita la toma de decisiones y permite realizar acciones de acuerdo a la entrada de información que reciba.
    La sentencia if... se usa, principalmente, para tomar decisiones. Permite que, si la condición es verdadera (true), se ejecute un código.
*/
let condicion = "";
if (condicion) {
  // Si la condición resulta verdadera, ejecuta este código.
}
/*
    Sin embargo, la Función Condicional más común es if… else. Con esta, nos aseguramos que, cuando una condición se cumple (es igual a true), retornemos una cosa. Sino (si es false), retornemos otra.
*/
if (condicion) {
  // Si la condición es true, ejecuta este código.
} else {
  // Sino, ejecuta este otro código (la condición es false).
}
/*
    ¿Cómo Graficar Los Caminos Condicionales?
    La página Code to Graph te permite pegar tu código para ver cómo es el camino lógico de forma gráfica. Pegá el tuyo y mirá cómo es el camino que propusiste.
    https://crubier.github.io/code-to-graph/?code=
*/
//Programa de aceptación medica.
let temperatura = prompt("Ingrese su temperatura.");
if (temperatura < 37.5) {
  alert("Prioridad baja");
} else {
  alert("Prioridad alta");
}
let condicion1 = "";
let condicion2 = "";
/*
  else... if es un recurso para poder anidar caminos intermedios entre el if y el else final. Una vez que se toma uno de los caminos, se completa el bloque lógico.
*/
if (condicion1) {
  // Si es true, se ejecuta este código.
} else if (condicion2) {
  // Si es true, se ejecuta este código.
} else {
  // Sino, se ejecuta este código.
}
