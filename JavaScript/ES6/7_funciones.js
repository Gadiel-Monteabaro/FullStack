// asi se establecen las funciones como propiedad de objetos en ej6
const person = {
    name: "Taylor",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
};

console.log(person.sayHello())