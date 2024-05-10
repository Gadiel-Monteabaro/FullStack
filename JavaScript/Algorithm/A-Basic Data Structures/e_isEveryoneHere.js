let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  let n = ["Alan", "Jeff", "Sarah", "Ryan"]; // n = nombres
  for (let i = 0; i < n.length; i++) {
    if (n[i] in userObj === false) { // userObj.hasOwnProperty(n[i]) => Otra opcion.
      return false;
    }
  }
  return true;
}

console.log(isEveryoneHere(users));

// confirmamos que el obj, contenga los cuatros nombres del arreglo 'n'.
