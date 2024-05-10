// las expresiones regulares se utilizan para coincidir con partes de cadenas
/regex/.test("string");

let testRegex = /Code/; // Mediante este patron, encontramos la coicidencia "Code"

let petRegex = /dog|cat|bird|fish/; // Encontramos varias coicidencias dentro de una cadena con el operador |

let fccRegex = /freeCodeCamp/i; // la bandera "i", ignora la capitalizacion del texto a buscar (minusculas o mayusculas)

let huRegex = /hu./; // expresion de comodin que me permite coincidir con un mismo patron en este caso "hu"

let bgRegex = /b[aiu]g/; // Con esta expresion hacemos conicidir una palabra que contenga esas vocales en este caso.
let bgRegex2 = /[aeiou]/; // Coicidimos con todas las vocales dentro de la cadena.
let myRegex = /[a-z0-9]/gi; // Podemos hacer coincidir un rango de numeros y letras.
let myRegex2 = /[^aeiou0-9]/gi; // Podemos hacer no coincidir.

let goRegex = /go*/; // encuentra el caracter "g" seguido por cero o mas caracters "o"

let firstRegex = /^Ricky/; // buscamos patrones al principio de la cadena
let storyRegex = /story$/; // buscamos patrones al final de la cadena

let shortHand = /\w+/; // equivale a [A-Za-z0-9_] incluye el guion bajo.
let shortHand1 = /\W/; //  equivale a [^A-Za-z0-9_] incluye el guion bajo.

let numRegex = /\d/g; // devuelve la cantidad de caracteres que son un digito
let noNumRegex = /\D/g; // devuelve la cantidad de caracteres que no son un digito

let str = "Hola todo bien 22222";

let rgx = /\d\s/;

console.log(rgx.test(str));
