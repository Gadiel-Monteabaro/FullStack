const myFunca = function () {
    const myVar = "value";
    return myVar;
}

// ES6 nos proporciona el azúcar sintáctico, para no tener que escribir funciones anónimas de este modo. En su lugar, puedes usar la sintaxis de función flecha:
const myFuncb = () => {
    const myVar = "value";
    return myVar;
}

// Cuando la función no posee cuerpo y sólo tiene un valor de retorno, la sintaxis de "función de flecha", te permite omitir la palabra clave return
const myFunc = () => "value";

// se pueden pasar parametro a una funcione flecha
const doubler = (item) => item * 2;
doubler(4);

// Parametros por defecto.
const greeting = (name = "Anonymous") => "Hello " + name;