/*
  La estructura condicional Switch() es otra alternativa para tomar decisiones en nuestro programa. Es muy útil cuando sabemos de antemano cuáles son los posibles datos a evaluar. Esto nos permite generar un código más conciso y con una performance mucho más óptima respecto del condicional if...else.
*/
let num = 2;
switch (num) {
  case 1:
    console.log("Entramos al primer case.");
    break;
  case 2:
    console.log("Entramos al segundo case.");
    break;
  default:
    console.log(
      "Esto se muestra por defecto en el caso de no encontrar una coincidencia."
    );
}

/*
  break, por su parte, es una palabra reservada que se usa para salir del bloque switch() una vez que se haya encontrado una coincidencia.
  Por último, la palabra reservada default indica que, en caso de que no haya una coincidencia, entraremos en esta sección del código.
*/
let dia = prompt("Ingrese un número.");
switch (dia) {
  case "1":
    console.log("Lunes");
    break;
  case "2":
    console.log("Martes");
    break;
  case "3":
    console.log("Miércoles");
    break;
  case "4":
    console.log("Jueves");
    break;
  case "5":
    console.log("Viernes");
    break;
  case "6":
    console.log("Sábado");
    break;
  case "7":
    console.log("Domingo");
    break;
  default:
    console.log("Ingrese un valor entre 1 y 7.");
}

/*
  En if...else, por ejemplo, si el usuario ingresara el número 7, nuestro programa evaluaría las 6 condiciones previas hasta llegar a la última condición. En cambio, con la estructura switch() esta evaluación es directa.
*/


/*
  Si tienes múltiples entradas con la misma salida, puedes representarlas en una sentencia switch como esta
*/
let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
