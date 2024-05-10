//Iterá actoresPrincipales y llevá a actoresVocales aquellos cuyo nombre o apellido comience con una vocal.

let actoresVocales = [];

let vocales = "aeiou";

let actoresPrincipales = [
  "Tom Hanks",
  "Johnny Depp",
  "Elizabeth Taylor",
  "Morgan Freeman",
  "Jennifer Aniston",
  "Meryl Streep",
  "Natalie Portman",
  "Ashton Kutcher",
];

actoresPrincipales.forEach((actor) => {
  if (!(vocales.indexOf(actor[0].toLowerCase()) === -1)) {
    actoresVocales.push(actor);
  }
});

//Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá sus nombres y apellidos al Arreglo actoresPrincipales.

let peliculas = [];

let actoresPrincipalesPorPelicula = {
  Titanic: "Leonardo DiCaprio",
  "El Padrino": "Al Pacino",
  Matrix: "Keanu Reeves",
  "Iron Man": "Robert Downey Jr",
  "Soy leyenda": "Will Smith",
  "Bastardos sin gloria": "Brad Pitt",
};

for (let propiedad in actoresPrincipalesPorPelicula) {
  actoresPrincipales.push(actoresPrincipalesPorPelicula[propiedad]);
}

//Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá los nombres de las películas en el Arreglo peliculas.

for (let propiedad in actoresPrincipalesPorPelicula) {
  peliculas.push(propiedad);
}

//Creá un Objeto vacíó llamado peliculaPorActor.

let peliculaPorActor = {};
//Agregá Propiedades a este Objeto donde la clave sea el nombre del actor y el valor sea la película.

peliculaPorActor["Leonardo Dicaprio"] = ["Titanic", "Jango"];
peliculaPorActor["Brad Pitt"] = ["Bastardos sin gloria", "El club de la pelea"];
