/*
  Los nombres de usuario sólo pueden utilizar caracteres alfanuméricos.
  Los únicos números del nombre de usuario tienen que estar al final. Puede tener un cero o más al final. El nombre de usuario no puede iniciar con un número.
  Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.
  Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres sólo puede utilizar letras del alfabeto como caracteres.
*/
let username = "JackOfAllTrades2";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/gi;
let result = userCheck.test(username);

/*
  Utiliza los lookaheads en el pwRegex para que coincida con las contraseñas que tengan más de 5 caracteres y dos dígitos consecutivos.
*/
let sampleWord = "BanAn13";
let pwRegex = /(?=\D)(?=\D\d{2})/gi;
let result2 = pwRegex.test(sampleWord);
console.log(result2);

/*
  Utiliza los grupos de captura en reRegex para que coincida con una cadena que conste sólo del mismo número repetido exactamente tres veces separado por espacios.
*/
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result3 = reRegex.test(repeatNum);

/*
  Escribe una expresión regular fixRegex utilizando tres grupos de captura que buscarán cada palabra en la cadena one two three. Luego actualiza la variable replaceText para reemplazar one two three con la cadena three two one y asigna el resultado a la variable result. Asegúrate de utilizar grupos de captura en la cadena de reemplazo utilizando la sintaxis del signo de dólar ($).
*/
let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/;
let replaceText = "$3 $2 $1";
let result4 = str.replace(fixRegex, replaceText);

/*
  Escribe una expresión regular y usa los métodos de cadena apropiados para eliminar espacios en blanco al principio y al final de las cadenas.

  Nota: El método String.prototype.trim() funcionará aquí, pero necesitarás completar este desafío usando expresiones regulares.
*/
let hello = "   Hello, World!  ";
let wsRegex = /\s\s+/g; // elimina espacios al comienzo y al final con expresiones regulares.
let result5 = hello.replace(wsRegex, "");
// Para este ultimo ejercicio podemos usar String.prototype.trim()
