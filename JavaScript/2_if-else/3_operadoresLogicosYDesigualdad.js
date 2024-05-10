/*
    ... || ... : Este operador, llamado "o", permite comparar un valor con 2, o más, condiciones. Para que la estructura dé como resultado true, alcanza con que solo 1 de ellas se cumpla. Si ninguna condición es true, la estructura será false.

    Para que || devuelva true, alcanza con que solo 1 sea verdadera.
*/
true || true; // La estructura es true.
true || false; // La estructura es true.
false || true; // La estructura es true.
false || false; // La estructura es false.

/*
    ... && ... : Este operador, llamado "y", permite comparar un valor con 2, o más, condiciones. Para que la estructura dé como resultado true, todas las condiciones deben cumplirse. Basta con que 1 de las condiciones no se cumpla para que toda la estructura sea false .

    Para que && devuelva true, todas las expresiones deben ser verdaderas:
*/
true && true; // La estructura es true.
true && false; // La estructura es false.
false && true; // La estructura es false.
false && false; // La estructura es false.

/*
    ... != ... : Este operador, llamado "diferente de..." o "de desigualdad", permite comparar un valor con 2, o más, condiciones. Para que la estructura dé como resultado true, todas las condiciones deben ser diferentes entre sí. Basta con que 1 de las condiciones no sea diferente para que toda la estructura sea false .
*/

/*
    Diferencia Blanda (!=) O Estricta (!==)
    Al igual que con los operadores de comparación, la diferencia entre dos valores puede ser blanda o estricta. Mientras que, en la primera, se evaluará solo el contenido, en la segunda se considerará tanto el contenido como el tipo de dato.
*/

/*
  JavaScript siempre evaluará un valor booleano en las estructuras condicionales. Es decir que, de ser necesario, forzará ese valor para interpretarlo como true o false.
*/
Boolean(100); // Devuelve true
Boolean("Analizando valor booleano"); // Devuelve true
Boolean(""); // Devuelve false
