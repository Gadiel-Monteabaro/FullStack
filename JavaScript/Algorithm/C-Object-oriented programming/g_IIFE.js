// funciones que son invocadas inmediatamente.
// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("A cozy nest is ready");
})();

// Este patrón se conoce como una expresión de función inmediatamente invocada o IIFE.

let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    },
  };
})();
// una IIFE que devuelve un objeto funModule, El objeto devuelto contiene todos los comportamientos de los mixins como propiedades del objeto.

// Agrupar una funcionalidad en un objeto o modulo.

function Bird() {}

let duck = new Bird();

funModule.singMixin(duck);

duck.sing();
