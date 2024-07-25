function Bird(name) {
  this.name = name;
}
// todos los objetos de js, tienen un prototype. Ademas el prototype de un objeto tambien es un objeto.
typeof Bird.prototype; // Object
Bird.prototype = {
  color: "Red",
};
// debido a que prototype es un objeto, puede tener su propio prototype.
Object.prototype.isPrototypeOf(Bird.prototype); // True
// Object.prototype es el prototype de Bird.prototype
let duck = new Bird("Donald");
console.log(duck.hasOwnProperty("name")); // True
// El método hasOwnProperty se define en Object.prototype al cual se puede acceder con Bird.prototype, al que se puede acceder con duck.
// Bird es un supertype de duck, y duck es un subtype. Object es un supertype de Bird y duck.
// Object es un supertype de todos los objetos de javascript => Por lo tanto podemos utilizar el metodo de hasOwnProperty, en cualquier objeto de javascript.
