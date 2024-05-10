// map realizado con For
Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

// map realizado con ForEach
Array.prototype.myMap = function (callback) {
  const newArray = [];
  this.forEach((elemento, indice, arreglo) =>
    newArray.push(callback(elemento, indice, arreglo))
  );
  return newArray;
};

console.log([23, 65, 98, 5, 13].myMap((item) => item * 2));
