// Utilizamos closures para evitar que las propiedades publicas se puedan modificar desde afuera.

// nos referimos a propiedad publica a las propiedades que pueden ser modificadas por fuera de su instancia.

function Cat(name) {
  this.name = name; // Esta propiedad se puede modificar desde afuera
  let weight = 20;
  this.getWeight = function () {
    // Evitamos la modificación de los datos desde afuera de la función
    return weight;
  };
}

let kira = new Cat("Kira");
