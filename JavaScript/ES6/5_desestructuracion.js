const user = { name: 'John Doe', age: 34 };

// creamos dos variables llamadas name y age donde guardamos la informacion establecida en el objeto user.
const { name, age } = user;

// asi podemos dar valores nuevos a las propiedades del objeto user.
const { name: userName, age: userAge } = user;

// 
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// otro 
const person = {
    johnDoe: {
        edad: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
};
// extraemos valores de una propiedad de objetos. y se lo asigna a una variable del mismo nombre
const { johnDoe: { edad, email } } = person;


// ejemplo de slice cambiado.
function removeFirstTwo(list) {
    //tomamos los dos primero valores de un array, y los sacamos del arreglo
    const [a, b, ...shorterList] = list;
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

//
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// directamente establecemos como parametro las propiedades del objeto stats
const half = ({ min, max }) => (max + min) / 2.0;