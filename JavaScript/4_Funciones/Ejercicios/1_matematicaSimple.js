//Una función que se llame triplicador que tome un número como input (osea, como Parámetro) y retorne el triple de ese valor.
let num1 = Number(prompt("Ingresar un Número."));
let num2 = Number(prompt("Ingresar otro Número."));
function triplicador(numero) {
  return numero * 3;
}

console.log(triplicador(num1));

//Una función multiplicador que tome dos números como Parámetros y devuelva el producto de los dos.

function multiplicador(primerNumero, segundoNumero) {
  return primerNumero * segundoNumero;
}

console.log(multiplicador(num1, num2));

//Una función division que tome dos números como Parámetros y devuelva el resultado de dividir el primero por el segundo.
function division(primerNumero, segundoNumero) {
  return primerNumero / segundoNumero;
}

console.log(division(num1, num2));

//Una función resto que tome dos números como Parámetros y devuelva el resultado del módulo del primero sobre el segundo.
function resto(primerNumero, segundoNumero) {
  return primerNumero % segundoNumero;
}
console.log(resto(num1, num2));
