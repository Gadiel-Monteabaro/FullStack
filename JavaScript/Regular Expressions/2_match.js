// Podemos extraer coincidencias con el metodo .match
"string".match(/regex/);

let ourStr = "Regular expressions";
let ourRegex = /expressions/; // extraemos la coincidencia "expressions"
ourStr.match(ourRegex); // nos devuelve la coicidencia.

let testStr = "Repeat, Repeat, Repeat";
let banderaG = /Repeat/g; // la bandera g nos devuelve el mismo patron, la cantidad de veces que aparezca en la cadena.
testStr.match(banderaG); // devuelve un array con todos los "Repeat" que encuentra en la cadena.

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // coincide con dos o mas "s" seguidas.
let result = difficultSpelling.match(myRegex); // devuelve "ss" "ss"

let text = "<h1>Winter is coming</h1>";
let myRegex1 = /<.*?>/; // devolvera <h1> y no <h1>Winter is coming</h1>

let countWhiteSpace = /\s/g; // devuelve las coincidencias de los espacion en blanco " ".
let nonSpaceRegex = /\S/g; // Busca caracteres que no sean espacios en blanco

let A2 = "aah";
let multipleA = /a{3,5}h/; // busca la coincidencia con la cantidad de "a" dentro de la cadena
let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/gi; // busca coincidencia solo con un limite inferior.
let timStr = "Timmmmber";
let timRegex = /tim{4}ber/i; // busca coincidencias de hasta 4 veces repetidas

let favWord = "favorite";
let favRegex = /favou?rite/; // coincide con ambas ortografias como favourite o favorite

let testStr1 = "Pumpkin";
let testRegex = /P(engu|umpk)in/; // coincide con lo que esta entre parentesis.
testRegex.test(testStr1);
