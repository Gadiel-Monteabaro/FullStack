let users = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  let n = Object.keys(obj); // n = nombres
  return n;
}

console.log(getArrayOfUsers(users));

// devuelve un arreglo de cadenas que representan cada propiedad en el objeto.
