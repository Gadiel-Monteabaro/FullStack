/*
En este ejercicio, deberás crear un Arreglo llamado películas, que tenga por cada película un Objeto con las siguientes Propiedades:

titulo
rating
loHasVisto
*/

const peliculas = [
  { titulo: "Narnia", rating: 3, loHasVisto: "visto" },
  { titulo: "Busqueda implacable", rating: 2, loHasVisto: "No visto" },
  { titulo: "Rapido y Furioso", rating: 5, loHasVisto: "visto" },
];

peliculas.forEach((pelicula) => {
  if (pelicula["loHasVisto"] === "visto") {
    console.log(
      "Viste " + pelicula["titulo"] + " - " + pelicula["rating"] + " estrellas"
    );
  }
});
