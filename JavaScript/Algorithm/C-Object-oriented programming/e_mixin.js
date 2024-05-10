let flyMixin = function (obj) {
  obj.fly = function () {
    console.log("Flying, wooosh!");
  };
};

// Un "mixin" permite a otros objetos utilizar una colección de funciones.

//  nos permite ejecutar una misma funcion a objetos que no estan relacionados.

let bird = {
  name: "Donald",
  numLegs: 2,
};

let plane = {
  model: "777",
  numPassengers: 524,
};

flyMixin(bird);
flyMixin(plane);

bird.fly();
