let x = {
  nombre: 'María',
  edad: 20,
  beca: true,
  calificaciones: [95, 87, 78, 97, 100, 99]
};

function promedio(alum) {
  let suma = 0;
  for (let calif of alum.calificaciones) {
    suma += calif;
  }
  return suma / alum.calificaciones.length;
}

console.log(x);
console.log(x.nombre);
console.log(x['beca']);
x.beca = false;
console.log(x['beca']);
x['<un-mensajito>'] = 'hola';
console.log(x['<un-mensajito>']);
console.log(promedio(x));
