//Todos los números entre -10 y 19.
let num = -10;

while (num <= 19) {
  console.log(num);
  num++;
}

//Todos los números pares entre 10 y 40.
let num2 = 10;

while (num2 <= 40) {
  if (!(num2 % 2)) {
    console.log(num2);
  }
  num2++;
}

//Todos los números impares entre 300 y 333.
let num3 = 300;

while (num3 <= 333) {
  if (num3 % 2) {
    console.log(num3);
  }
  num3++;
}

//Todos los números entre 5 y 50 que sean divisibles por 5 y 3 al mismo tiempo.
let num4 = 5;

while (num4 <= 50) {
  if (!(num4 % 5) && !(num4 % 3)) {
    console.log(num4);
  }
  num4++;
}
