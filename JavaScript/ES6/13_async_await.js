function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("Descargando Clientes... Espere...");

    setTimeout(function () {
      console.log("Los clientes fueron descargados.");
    }, 5000);
  });
}

function descargarUltimosPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando Pedidos... Espere...");

    setTimeout(function () {
      console.log("Los pedidos fueron descargados.");
    }, 3000);
  });
}

async function app() {
  try {
    // const clientes = await descargarNuevosClientes();
    // const pedidos = await descargarUltimosPedidos();
    // console.log(clientes);
    // console.log(pedidos);

    // Podemos trabajar con dos o mas promesas
    const resultado = await Promise.all([
      descargarNuevosClientes(),
      descargarUltimosPedidos(),
    ]);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

app();

// Depende que los clientes se descarguen para ser ejecutado.
// Pero el resto del codigo se ejecutara igualmente.
