/*
    Los Strings son cadenas de caracteres. Para que JS los reconozca como tal, el texto debe escribirse entre comillas dobles ("") o simples ('').

    Características Principales:    
    Los Strings son cadenas de caracteres cuya información puede ser representada como un texto.

    Un caracter puede ser tanto un texto, como un espacio o un número, siempre y cuando estén entre comillas:
*/
"Tengo" + " " + "18";

/*
    ⚠️Importante: Los caracteres son case sensitive. Esto significa que escribir una A y a será interpretado de forma distinta.

    Pueden concatenarse usando el operador de suma (+).
    
    Los datos pueden coercionarse. Por ejemplo, cuando se concatena un String con un número, este último será forzado a comportarse como un texto
*/
"Tengo " + 18 + " años"; //Si bien, el 18 es un valor numérico, JavaScript lo interpretará como un texto: Tengo 18 años.

//Ejemplos
("Hola como estas"); //Hola como estas

"Hola" + "como" + "estas"; //Hola como estas

"Hola " + "como " + "estas"; //Hola como estas

"5" + "5"; //55

"5" + 5; //55

("5 + 5"); //5 + 5;

"Tengo " + 22 + " años"; //Tengo 22 años

/*
    ⚠️ Importante: Las Propiedades también se conocen como Funciones.

    Length: Permite contar la cantidad de caracteres que hay en un String.

    [ ]: Permite acceder a un caracter puntual de un String para saber qué hay en esa posición.
    ⚠️ Importante: Las posiciones se cuentan del 0 en adelante.

    toLowerCase(): Convierte todo el String en minúsculas.

    toUpperCase(): Convierte todo el String en mayúsculas.

    concat(): Concatena (es decir, une) dos o más Strings. Este método no cambia los Strings existentes, sino que devuelve uno nuevo que contiene   el texto de los Strings unidos.

    includes(): Determina si un String contiene los caracteres especificados en el paréntesis. Este método devuelve true si los contiene y false    si no.
*/

let frase = "Hola a todo el Mundo";

console.log(frase.length);//20

console.log(frase[0]); //Siempre el posicionamiento, se cuenta como el primer elemento o indice desde 0

console.log(frase.toLowerCase()); //Devuelve todo un string a minusculas.

console.log(frase.toUpperCase()); //Devuelve todo un string a mayusculas.

console.log(frase.concat(" sobre todo a Gadiel."));

console.log(frase.includes("hola"));