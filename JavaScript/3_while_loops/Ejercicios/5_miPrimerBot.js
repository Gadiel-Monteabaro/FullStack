/*
    En este ejercicio deberás crear un bot para una cafetería que reciba hasta 20 clientes y les asigne una mesa, a cada uno de ellos.

    El mensaje que deberá mostrar a cada uno es: "¡Bienvenid@ a mi café! Su mesa es la X".
    
    Extra Credit Optimizá el código creando una Variable que almacene el número de clientes.
*/

let mesas = 20,
  clientes = 1,
  cantidadClientes;

while (clientes <= mesas) {
  console.log(`¡Bienvenid@ a mi café! Su mesa es la ${clientes}`);
  cantidadClientes = clientes++;
}
console.log("Lo sentimos no tenemos mas mesas");
console.log(`La cantidad de clientes es: ${cantidadClientes}`);
