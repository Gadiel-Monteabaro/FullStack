/* 
Usando la estructura switch(), pedile al usuario que valore la película que acaba de ver en:

Muy Mala.
Mala.
Mediocre.
Buena.
Muy buena.
Acompañá cada valoración con un mensaje que indique si lamentás o te alegrás por su valoración.

Por ejemplo, "Calificaste la película como Muy Mala. Lo lamentamos mucho.".

En caso de que ingresara un valor distinto, mostrale el mensaje: "Ingresaste un valor inválido".

Cuando el usuario haya valorado la película, agradecele su visita.
*/
let valoracion = prompt("¿Que te parecio la pelicula?");

switch (valoracion) {
  case "Muy Mala":
    alert("Calificaste la película como Muy Mala. Lo lamentamos mucho.");
    break;
  case "Mala":
    alert("Trataremos de mejorar para la proxima pelicula");
    break;
  case "Mediocre":
    alert("Calificaste la película como Mediocre, lamentamos tu valoracion.");
    break;
  case "Buena":
    alert("Calificaste la película como Buena, nos alegra tu valoracion.");
    break;
  case "Muy Buena":
    alert(
      "Calificaste la película como Muy Buena, Nos alegra que te haya encantado."
    );
    break;
  default:
    alert("Ingresaste un valor invalido.");
}
