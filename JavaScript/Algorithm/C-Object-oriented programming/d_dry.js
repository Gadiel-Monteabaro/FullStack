// Don't Repeat Yourself
function Producto(id, name, precio, stock) {
  this.id = id;
  this.name = name;
  this.precio = precio;
  this.stock = stock;
}

Producto.prototype = {
  constructor: Producto,
  saludar: function () {
    return "Gracias, Por su compra.";
  },
  insultar: function () {
    return "Anda pa ya Bobo.";
  },
  error: function () {
    return "Por favor, ingresar correctamente el codigo de la tarjeta.";
  },
};

let heladera = new Producto("2323", "Heladera", 3000, 23);

// utilizamos la propiedades prototipo del Constructor Producto, en el Constructor Carniceria.
function Carniceria(name, precio) {
  this.name = name;
  this.precio = precio;
}

Carniceria.prototype = Object.create(Producto.prototype);

Carniceria.prototype.constructor = Carniceria;

let milanesas = new Carniceria("Milanesas", 1200);

console.log(milanesas.error());
