/*
    .filter() es un método que retorna un nuevo Arreglo, con los datos filtrados según una Función que le pasamos por Parámetro.
*/

let notas = [1, 2, 3, 4, 10, 7, 6, 4, 8];


let aprobadas = notas.filter(nota => nota >= 6)
//Con el método .filter() podemos filtrar Arreglos que contengan cualquier tipo de datos.

let comidas = [
    { nombre: '1', vegetariana: false }, { nombre: '2', vegetariana: true },
    { nombre: '3', vegetariana: true }, { nombre: '4', vegetariana: false }
];

let vegetarianas = comidas.filter(comida => comida.vegetariana === true)
//  const vegetarianas = comidas.filter(function (comida) {
//   return comida.vegetariana;
//  });

console.log(vegetarianas);
   // [{ nombre: '2', vegetariana: true }, { nombre: '3', vegetariana: true }]