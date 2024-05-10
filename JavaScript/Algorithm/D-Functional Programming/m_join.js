//  La función debe devolver una cadena. Por ejemplo, I-like-Star-Wars se convertiría en I like Star Wars.
function sentensify(str) {
  return str.split(/\W/).join(" ");
}

console.log(sentensify("May-the-force-be-with-you"));
