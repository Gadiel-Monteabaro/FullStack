class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  formatearProducto() {
    return `El producto ${this.nombre} tiene un precio de: $${this.precio} dolares.`;
  }
}

const producto1 = new Producto("Monitor Curvo", 800);
const producto2 = new Producto("Tv Samsung", 600);

console.log(producto1.formatearProducto());
console.log(producto2.nombre, producto2.precio);

// Herencia
class Libro extends Producto {
  constructor(nombre, precio, isbn) {
    super(nombre, precio);
    this.isbn = isbn;
  }
}

const libro = new Libro("JavaScript", 150, "459465484");

console.log(libro.isbn);
