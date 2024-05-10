/*
    object.freeze -> protege los datos de posibles mutaciones.
*/
let obj = {
    name: "FreeCodeCamp",
    review: "Awesome"
};

Object.freeze(obj);

obj.review = "bad";
obj.newProp = "Test";

// la informacion que contiene 'obj' no se puede cambiar.
console.log(obj);