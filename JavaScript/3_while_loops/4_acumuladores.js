/*
    Variables Acumuladoras.
    Una Variable Acumuladora (o Acumulador) es una Variable que se va construyendo a partir de cada iteracion del loop.
*/
let i = 1;
let final = 5;
let acumulador = 0;

while (i <= final) {
  acumulador += i;
  i++;
}

console.log(acumulador); //15
/*
  🛎️ Recordá: Escribir primero la medida de seguridad (la línea de código que modificará a la Variable) te evitará caer en un Loop Infinito. En este ejemplo es i++.
*/
