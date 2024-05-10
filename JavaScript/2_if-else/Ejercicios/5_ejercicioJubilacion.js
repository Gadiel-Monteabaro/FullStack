let persona = prompt("Ingreso su genero, Mujer o Hombre")
let edad = Number(prompt("Ingrese su edad"))

if ((persona === "mujer" && edad >= 60) || (persona === "hombre" && edad >= 65)) {
    alert("Te podes jubilar tranquilamente, cumplis con la edad requerida")
} else {
    alert("Por favor, leer las condiciones de jubilacion necesarias, para acceder a este beneficio.")
}