/*
  Una Variable es un contenedor que guarda información para, luego, usarla.

  ¿Qué Significa Declarar Y Definir?
  Cuando se habla de declarar una Variable, se la está creando. Cuando se habla de definir una Variable, se le está asignando contenido.

  Caracteristicas Principales.
  Una Variable es un contenedor de información rotulada (named storage for data).
*/
let user = "Gadiel Monteabaro";

user = "Ezequiel Silva";

console.log(user);

/*
    la Variable puede modificarse (de ahí su nombre). Es decir, su valor puede cambiar con el uso o el tiempo. Podemos declararla asignándole un valor. Si no se lo damos, se completará más adelante en el programa.
*/
let total; // variable sin usar, que se completara mas adelante en el programa.

/*
  Variables con datos numericos.
  Si el valor de la varible es un dato numerico podemos llamarla directamente.  
*/
let dineroEnLaCuenta = 100;
let nuevoDeposito = 1200;
let comisionBancaria = 0.05;

(dineroEnLaCuenta + nuevoDeposito) * comisionBancaria;

/*
  Keywords Para Definir Variables
  var: Es una forma antigua de crear variables, en las versiones modernas de JS, ya no se utiliza.

  let: Permite actualizar una Variable pero no volver a crearla.

  const: Permite crear una Variable que se mantendrá constante durante todo el programa. Es decir, no se podrá actualizar ni cambiar.
*/

var lastName = "Silva Monteabaro"; // No se utiliza

let firstName = "Gadiel Ezequiel";

const birthday = "31/07/1996";
