const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  },
  Maria: {
    online: true
  } 
}

function countOnline(usersObj) {
  let c = 0; // c = contador
  for (const user in usersObj) {
    const connect = usersObj[user]['online']; // estado del usuario
    if (connect === true) {
      c++;
    }
  }
  return c;
}

console.log(countOnline(users));

//  devuelve el número de usuarios cuya propiedad online esté establecida como true.