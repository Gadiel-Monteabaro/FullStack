let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return `This dog has ${this.numLegs} legs.`;
  },
};

console.log(dog.sayLegs());

// this -> se refiere al objeto, con el que el metodo esta asociado.
