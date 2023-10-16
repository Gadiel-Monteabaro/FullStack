// querySelector
const heading = document.querySelector("#heading"); // 0 a 1 elemento
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll(".navegacion a");
enlaces[0].textContent = "Contenido";
enlaces[0].href = "https://www.google.com/";
enlaces[0].target = "_blank";
enlaces[0].style = "color: skyblue";

// createElement
const nuevoEnlace = document.createElement("A");
nuevoEnlace.href = "https://google.com"; // agregar href
nuevoEnlace.textContent = "Tienda"; // agregar texto
nuevoEnlace.classList.add("navegacion__enlace"); // agregar clases
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);
