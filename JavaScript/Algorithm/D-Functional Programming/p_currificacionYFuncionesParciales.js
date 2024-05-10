// La ariedad de una funcion se refiere a la cantidad de argumentos que requiere.
// Currificar una funcion, significa convertir una funcion de N ariedades, en N funciones de 1 ariedad.
function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

let functX = add(2);
let functY = functX(2);
let functZ = functY(2);

console.log(functZ);
