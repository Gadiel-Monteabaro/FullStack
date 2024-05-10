function Dog(name, color) {
  (this.name = name), (this.color = color);
}

// las funciones constructoras crean nuevos objetos, definen propiedades y comportamientos que perteneceran al nuevo objeto.

// utilizan la palabra clave this para establecer propiedades del objeto que crearán.

// this dentro del constructor se refiere al objeto que se esta creando.

Dog.prototype = {
  // las propiedades de prototype se comparten entre todas las instancias del constructor.
  constructor: Dog, // cada vez que un prototipo se establece de forma manual a un nuevo objeto, definir la propiedad constructor.
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

let hound = new Dog("Mara", "Black"); // new, es el operador que indicara una nueva instancia del constructor Dog(), llamada hound.

Dog.prototype.isPrototypeOf(hound); // mostramos la relacion entre el objeto y las propiedades prototype del constructor.

hound instanceof Dog; // instanceof, permite verificar si un objeto fue creado con un determinado constructor, retorna un booleano.

let ownProps = []; // propiedades directas.
let prototypeProps = []; // propiedades prototype.

for (let property in hound) {
  // obtener las propiedades del respectivo objeto.
  if (hound.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
