let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  let f = userObj.data.friends // f = friends array
  f.push(friend);
  return f;
}

console.log(addFriend(user, 'Gadiel'));

// toma un objeto user y agregua el nombre del argumento friend al arreglo almacenado en user.data.friends