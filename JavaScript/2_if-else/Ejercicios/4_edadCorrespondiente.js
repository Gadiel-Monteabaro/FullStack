//Si la edad es negativa, que se muestre en la consola este mensaje: "Error, su edad no es válida."
//⚠️Importante: No se deberá mostrar ningún otro mensaje.

//Si tiene 21 años, además de darle la bienvenida, felicitalo por haber llegado a la mayoría de edad.

//Si su edad es impar decile en cualquiera de los mensajes: "¿Sabías que tu edad es impar?".

let edad = prompt("Ingresar su edad.");

if (edad < 0) {
  console.log("Error, su edad no es valida.");
} else if (edad == 21) {
  alert("Felicitaciones sos mayor de Edad.");
} else if (edad % 2 !== 0) {
  alert("¿Sabias que tu edad es impar.?");
}
