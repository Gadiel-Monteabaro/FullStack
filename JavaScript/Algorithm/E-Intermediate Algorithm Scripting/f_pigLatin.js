/*
  - Si una palabra comienza con una consonante, toma la primer consonante o grupo de consonantes, muévela al final de la palabra, y añade ay a ella.

  - Si una palabra comienza con una vocal, solo añade way al final.
*/
function translatePigLatin(str) {
  const reg = /^[aeiou]/.test(str);

  if (reg) {
    return str.concat("way");
  }

  const consonant = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonant.length) + consonant + "ay";
}

translatePigLatin("tsdeight");
