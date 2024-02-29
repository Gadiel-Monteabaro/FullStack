// Variables de entorno -- En el entorno del desarrollo tienen un valor, y en el entorno de produccion tienen un valor diferente

// Varables de entorno -- Van en un archivo llamado .env

// json-server --watch "archivo"
export async function obtenerClientes() {
  const respuesta = await fetch(import.meta.env.VITE_API_URL);
  const resultado = await respuesta.json();

  return resultado;
}

export async function obtenerCliente(id) {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);

  if (!respuesta.ok) {
    throw new Error(
      `Error al obtener el recurso: El Cliente No Fue Encontrado, ${respuesta.status} ${respuesta.statusText}.`
    );
  }

  const resultado = await respuesta.json();

  return resultado;
}

export async function agregarCliente(datos) {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "content-type": "application/json",
      },
    });
    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}

export async function actualizarCliente(id, datos) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "PUT", // Metodo HTTP para actualizar
      body: JSON.stringify(datos),
      headers: {
        "content-type": "application/json",
      },
    });
    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}

export async function eliminarCliente(id) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "DELETE", // Metodo HTTP para actualizar
    });
    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}
