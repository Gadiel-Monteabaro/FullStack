let boton = document.getElementById("button__cambiar");
let cita = document.getElementById("cita");
let autor = document.getElementById("autor");

function numeroAleatorio() {
  return Math.floor(Math.random() * citas.length);
}

function cambiarCita() {
  let indiceAleatorio = numeroAleatorio();
  cita.textContent = `"${citas[indiceAleatorio].texto}"`;
  autor.textContent = citas[indiceAleatorio].autor;
}

cambiarCita();

boton.addEventListener("click", cambiarCita);
