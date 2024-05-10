/*
    📚 Llamamos Callback Function a una función que es argumento de otra y, luego, es ejecutada por esta.

    Callback le permite una función poder llamar a otra función.

    ⚠️ Importante: entender qué es una Callback resulta clave ya que se usa mucho en programación (y cobrará mayor sentido cuando lleguemos a la clase de Eventos).
*/
function fn(num, fnCallback) {
  return fnCallback(num);
}

fn(5, (a) => { return a * 10 }) // 50
fn(25, (a) => { return a / 5 }) // 5
