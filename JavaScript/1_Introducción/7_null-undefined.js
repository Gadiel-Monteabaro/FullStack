/*
    Null y Undefined son dos valores que se pueden asignar a las variables. Si bien ambos significan que no tienen contenido, su diferencia es conceptual.
    Si declaramos una Variable pero no le asignamos un valor, por defecto va estar undefined. Como dice el nombre, la Variable está sin definir, o sea, no tiene un valor por ahora.
*/
let age;
let name;

/*
    En cambio, en null, la Variable está explícitamente vacía.
*/
// Tenemos un usuarioActual
let usuarioActual = "Tessie";
// Tessie se desconecta y ya no hay un usuarioActual
usuarioActual = null;

/*  
    Ejemplo:
    Un formulario de inscripción a un curso tiene los siguientes campos: nombre, segundo nombre, apellido.

    Hasta que el usuario complete el formulario, todas las Variables estarán undefined. Luego, cuando envíe el formulario, esas Variables tendrán un valor asignado en la base de datos.

    Sin embargo, puede ser que un usuario no tenga segundo nombre (SegundoNombre) y deje ese campo vacío. En ese caso, esa Variable se guardará en la base de datos con un valor null.
*/
