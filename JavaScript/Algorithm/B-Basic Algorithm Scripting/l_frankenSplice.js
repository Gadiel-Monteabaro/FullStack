function frankenSplice(arr1, arr2, n) {
  let a = []; // a = array copia

  a.push(...arr2.slice(0, n), ...arr1, ...arr2.slice(n));

  return a;
}

console.log(
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
);
