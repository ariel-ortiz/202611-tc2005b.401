const alumno = {
  nombre: "Juan Camaney",
  edad: 21,
  matricula: 123,
  calificaciones: [90, 85, 79],
  casado: false
};

const json_alumno = JSON.stringify(alumno);
console.log(json_alumno);
const otro = JSON.parse(json_alumno);
console.log(otro);

