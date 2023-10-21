// Eventos
window.addEventListener("load", () => {
  // load espera a que los recursos esten completamente listos, para ejecutarse.
});

window.onload = function () {
  // load espera a que los recursos esten completamente listos, para ejecutarse.
};

document.addEventListener("DOMContentLoaded", function () {
  // DomContentLoaded, solo espera a que los recursos de nuestro HTML se descarguen.
});

// Seleccionar elementos y agregar eventos.
const btnEnviar = document.querySelector(".boton--primario");

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault(); // previene la accion por default del elemento seleccionado.
});

// Eventos de inputs
const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

function leerTexto(e) {
  datos[e.target.id] = e.target.value;
  console.log(datos);
}
