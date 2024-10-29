//  Fetch API es el nuevo estándar, permite enviar informacion al servidor o obtener informacion de un servidor.

// API: Interfaz de programacion de aplicaciones.

// Podemos obtener un archivo local o una respuesta de un servidor (texto o JSON)

// JSON: JavaScript Object Notation + Lenguaje de transporte de datos.

// JSON, puede ser creado en cualquier lenguaje y se puede consumir en JavaScript por medio de Fetch API y mostrarlo en el sitio web.

async function obtenerEmpleados() {
  const archivo = "14_fetch__empleados.json";
  // Obtener datos con promesas.
  fetch(archivo)
    .then((res) => res.json())
    .then((datos) => {
      const { empleados } = datos;

      empleados.forEach((empleado) => {
        console.log(empleado.id);
        console.log(empleado.nombre);
        console.log(empleado.puesto);
      });
    });

  // Obtener datos con Async __ Await
  const resultado = await fetch(archivo);
  const datos = await resultado.json();
  const { empleados } = datos;
  empleados.forEach((empleado) => {
    console.log(empleado.id);
    console.log(empleado.nombre);
    console.log(empleado.puesto);
  });
}

async function obtenerProductos() {
  // obtener los datos de producto con async __ await
  const res = await fetch(archivo);
  const datos = await res.json();
  const { productos } = datos;

  productos.forEach((producto) => {
    console.log(`Producto: ${producto.nombre}`);
    console.log(`Precio: $${producto.precio} ARS.`);
  });
}

function obtenerProductosPromesas() {
  const data = "14_fetch__empleados.json";

  fetch(data)
    // obteniendo los datos de nuestro archivo json
    .then((res) => res.json())
    // trabajando con los datos recibidos
    .then((datos) => {
      const { productos } = datos;
      productos.forEach((producto) => {
        console.log(`Producto: ${producto.nombre}`);
        console.log(`Precio: $${producto.precio} ARS.`);
      });
    });
}

obtenerProductosPromesas();
