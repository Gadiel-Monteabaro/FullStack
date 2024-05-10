//Pedir al visitante que ingrese una contraseña cuando visite el sitio. Si es correcta, redirigilo usando esta línea de código: window.location = "http://www.google.com"
let contraseña = prompt("Ingresar Contraseña");

if (contraseña == 123456789) {
  window.location = "http://www.google.com";
} else {
  alert("Contraseña ingresada incorrecta");
}
