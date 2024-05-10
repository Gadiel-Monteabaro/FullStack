Array.prototype.myFilter = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

Array.prototype.myFilter = function (callback) {
  const newArray = [];
  this.forEach((elemento, indice, arreglo) => {
    if (callback(elemento, indice, arreglo)) {
      newArray.push(elemento);
    }
  });
  return newArray;
};

console.log([23, 65, 98, 5, 13].myFilter((item) => item > 20));
