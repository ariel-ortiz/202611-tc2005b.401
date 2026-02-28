function creaPromesa() {
  return new Promise((resolve, reject) => {
    const randomValue = Math.random();
    setTimeout(() => {
      if (randomValue < 0.5) {
        resolve('ganaste');
      } else {
        reject('perdiste');
      }
    }, 1000);
  });
}

console.log('Inicio');
const resultado = [];
creaPromesa()
.then(x => {
  resultado.push(x);
  return creaPromesa();
})
.then(x => {
  resultado.push(x);
  return creaPromesa();
})
.then(x => {
  resultado.push(x);
  console.log('Tres promesas cumplidas sucesivamente');
  console.log('Resultado =', resultado);
})
.catch(err => {
  resultado.push(err);
  console.error('¡Loser!');
  console.log('Resultado =', resultado);
});
console.log('Final');

