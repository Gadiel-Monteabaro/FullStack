//Todos los números entre -10 y 19.
/*
let num = Number(prompt("Ingresa un Numero."));

while (!(num > -10 && num < 19)) {
  num = Number(prompt("Ingresa un Numero que este entre -10 y 19."));
}
console.log(num);
*/

//Todos los números pares entre 10 y 40.
/*
let num = Number(prompt("Ingresa un numero par entre ,  10 y 40."));

while (!(!(num % 2) && num > 10 && num < 40)) {
  alert("Recorda que el numero tiene que ser PAR y estar entre 10 y 40.");
  num = Number(prompt("Ingresa un numero par entre , 10 y 40."));
}
console.log(num);
alert("Numero ingresado es " + num + ".");
*/

//Todos los números impares entre 300 y 333.
/*
let num = Number(prompt("Elegi un numero Inpar entre ,  300 y 333."));

while (!(num > 300 && num < 333 && num % 2)) {
  alert(
    "Recorda que el numero a elegir tiene que ser IMPAR, y estar entre 300 y 333."
  );
  num = Number(prompt("Elegi un numero Inpar entre ,  300 y 333."));
}
console.log(num);
alert("El numero elegido es " + num);
*/

//Todos los números entre 5 y 50 que sean divisibles por 5 y 3 al mismo tiempo
/*
let num = Number(
  prompt(
    "Ingresar un Numero entre 5 y 50, que sean divisibles por 5 y 3 al mismo tiempo"
  )
);

while (!(num > 5 && num < 50 && !(num % 5) && !(num % 3))) {
  alert(
    "El numero ingresado " + num + " no cumple con las condiciones pedidas."
  );
  num = Number(
    prompt(
      "Recorda ingresar un valor entre 5 y 50, que sea divisibles por 5 y 3"
    )
  );
}
console.log(num);
*/
