const inputRojo = document.getElementById("red");
const inputVerde = document.getElementById("green");
const inputAzul = document.getElementById("blue");

const textoRojo = document.getElementById("text-red");
const textoVerde = document.getElementById("text-green");
const textoAzul = document.getElementById("text-blue");

// Valor inicial de los inputs
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Actualizar el texto de los parrafos
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

let bordeRojo = document.getElementsByClassName("color")[0];
let bordeAzul = document.getElementsByClassName("color")[1];
let bordeVerde = document.getElementsByClassName("color")[2];
let boxColor = document.getElementById("box__color");

bordeRojo.style.borderColor = `rgb(255, 0, 0)`;
bordeAzul.style.borderColor = `rgb(0, 0, 255)`;
bordeVerde.style.borderColor = `rgb(0, 255, 0)`;

function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde},${azul})`;
  boxColor.style.backgroundColor = colorRGB;
}

// Actualizar color rojo
inputRojo.addEventListener("change", (e) => {
  rojo = e.target.value;
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul);
});

// Actualizar color verde
inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo, verde, azul);
});

// Actualizar color azul
inputAzul.addEventListener("change", (e) => {
  azul = e.target.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
});
