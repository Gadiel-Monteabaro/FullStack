/*
    Una función lookUpProfile que recibe nombre (name) y una propiedad (prop) como argumentos preescritos para ti.

    
    Si ambos son verdaderos, entonces devolver el "valor" de esa propiedad.
    
    Si name no corresponde a ningún contacto, entonces devuelve la cadena No such contact.
    
    Si prop no corresponde a ninguna propiedad válida de un contacto encontrado que coincida con name entonces devuelve la cadena No such property.
    
    a función debe verificar si el nombre (name) es el nombre de pila del contacto (firstName) y la propiedad (prop) dada es una propiedad de ese contacto.
*/

// Configuración
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Cambia solo el código debajo de esta línea
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property"
        }
    }
    return "No such contact"
    // Cambia solo el código encima de esta línea
}

console.log(lookUpProfile("Akira", "likes"))
console.log(lookUpProfile("Kristian", "travels"))
console.log(lookUpProfile("Lionel", "likes"))