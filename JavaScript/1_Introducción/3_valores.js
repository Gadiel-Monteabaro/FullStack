/*
    JavaScript manipula distintos tipos de datos o valores, con una sintaxis particular para cada uno de ellos.

   ⚠️Importante: JavaScript es case sensitive, es decir, las mayúsculas y las minúsculas tienen codificaciones distintas.

    Esto se debe al código ASCII, creado en 1963 por el Comité Estadounidense de Estándares. Hoy en día, casi todos los sistemas informáticos usan el código ASCII para representar caracteres, símbolos, signos y textos. Por eso, la A ocupa la celda 65, mientras que la a (minúscula) ocupa la 97.

    https://elcodigoascii.com.ar/ 
*/

/*
    Números: Funcionan igual que en la matemática. Pueden ser números enteros o racionales. Se pueden sumar, restar, multiplicar o dividir y siguen la lógica de resolución que privilegia las operaciones dentro de los paréntesis para luego resolver el resto.

    Strings: Son cadenas de caracteres que incluyen letras, números y espacios. Debemos encerrarlos entre comillas simples (‘’) o dobles ("") para que JS entienda que es texto y no la confunda con una Variable.
    
    Booleanos: Son datos de tipo true (verdadero) o false (falso), es decir, que activan o desactivan cierta parte del programa según el input recibido.
    
    Undefined: Es un valor que posee una Variable que está sin definir en ese momento.
    
    Null: Es un valor que posee una Variable que está explícitamente vacía (y hay una razón para ello).

    ¿Cuál Es La Diferencia Entre Undefined Y Null?

    Si pensamos en una Variable como una caja, el valor undefined indica que la caja está vacía (hasta que le demos contenido).
    
    En cambio, en el caso de null, el programador le asignó explícitamente el valor para que la caja permanezca vacía.
*/

/* 
    Función typeof
    typeof es una Función nativa de JavaScript a la que le podés pasar un Párametro y retornará qué tipo de dato es: si se trata de un String, null, undefined, etc.
*/
typeof 5; //("number");

typeof "5"; //("string");

let newVariable = "Playing around with typeof.";
console.log(typeof newVariable); // string

newVariable = 1;
console.log(typeof newVariable); // number
