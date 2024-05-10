//Tenés una lista de estudiantes con su desempeño académico actual. Querés subirle 2 puntos a aquellos que su nota sea mayor a 5. Recordá que la nota tampoco puede superar al 10.

let alumnos = [
  { Estudiante: "Juan", nota: 6 },
  { Estudiante: "Mario", nota: 8 },
  { Estudiante: "Julia", nota: 10 },
  { Estudiante: "Gadiel", nota: 4 },
  { Estudiante: "Sofia", nota: 9 },
];

alumnos.forEach((alumno) => {
  if (alumno["nota"] > 5 && alumno["nota"] <= 8) {
    alumno.nota += 2;
  } else if (alumno["nota"] === 9) {
    alumno.nota++;
  }
});

console.log(alumnos);
