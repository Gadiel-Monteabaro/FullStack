const nameInput = document.querySelector("#name");
const password = document.querySelector("#password");
const text = document.querySelector("h3");

nameInput.addEventListener("input", (e) => {
  text.textContent = e.target.value;
});

const data = {
  name: "",
  password: "",
};

nameInput.addEventListener("input", leerTexto);
password.addEventListener("input", leerTexto);

function leerTexto(e) {
  data[e.target.id] = e.target.value;
  console.log(data);
}
