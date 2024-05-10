function checkObj(obj, checkProp) {
    // Cambia solo el código debajo de esta línea

    if (obj.hasOwnProperty(checkProp) === true) {
        return `${obj[checkProp]}`;
    } else {
        return `Not Found`;
    }

    // Cambia solo el código encima de esta línea
}

//Con delete podemos borrar una propiedad de nuestro objeto.

let auto = {
    marca: "Nissan",
    patente: "HER 234",
    ano: "2022",
    color: "Gris",
    puertas: 5,
    ruedas: "cromadas"
}
console.log(auto);

delete auto.ruedas; // delete auto["ruedas"]
console.log(auto);


//Como buscar dentro de objetos anidados.
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);




