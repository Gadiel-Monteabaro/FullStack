//EJERCICIO 1
alert("bienvenido a mi pagina");
let nombre = prompt("¿Cual es tu Nombre?");
alert("Hola, " + nombre + " ,espero que tengas un buen dia.");
let edad = prompt("¿Cuantos años tenes?");
console.log("La edad del usuario es " + edad);

//EJERCICIO 2
let cumpleaños = prompt("Fecha de Cumpleaños"),
  ciudad = prompt("Ciudad de Origen"),
  ocupacion = prompt("¿A que te dedicas?"),
  pasatiempos = prompt("Tu pasatiempo favorito");
console.log(
  "Nombre de Usuario: " +
    nombre +
    " Edad: " +
    edad +
    " años, " +
    "Ciudad: " +
    ciudad +
    ", " +
    "Ocupacion: " +
    ocupacion +
    ", " +
    "Pasatiempo: " +
    pasatiempos +
    "."
);

//EJERCICIO 3

let textoUsuario = prompt("Ingresar descripcion sobre su carrera.");
console.log(textoUsuario.length);

//EJERCICIO 4

let edad1 = parseInt(prompt("¿Cuantos años tienes?"));
let edadDias = edad1 * 365;

alert("Tu edad equivale a, " + edadDias + " Dias");

//EJERCICIO 5

let num1, num2, resultado;
num1 = parseFloat(prompt("Ingresa un Numero"));
num2 = parseFloat(prompt("Ingresa Otro Numero"));
resultado = num1 + num2;
console.log(resultado);

//Ejercicio 1 Calculador De Abastecimiento De Por Vida

let miEdad = 25;
let edadMaxima = 50;
let snackFavorito = "Galletas";
let snackPorDias = 5;
let snackFaltantes = (edadMaxima - miEdad) * 365 * 5;
alert("Te falta por comer, " + snackFaltantes + " Galletas.");
let precioSnack = 2;
let gastoTotal = snackFaltantes * precioSnack;
alert("Gastaras " + "$" + gastoTotal + " Pesos.");

console.log(snackFaltantes);

//Ejercicio 2 Calculador De Abastecimiento De Por

let diasDeViaje = 15;
let presupuesto = 100000;
let comida = 20;
let gastoEnComida = presupuesto / comida;

console.log(gastoEnComida);

alert(
  "Podés gastar " +
    "$" +
    gastoEnComida +
    " en cada comida para que te alcance la plata durante los " +
    diasDeViaje +
    " días de viaje."
);
