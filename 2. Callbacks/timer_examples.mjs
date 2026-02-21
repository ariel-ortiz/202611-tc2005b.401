function alfa() {
  console.log('Soy alfa');
}

console.log('Inicio');
setTimeout(alfa, 2000);
setTimeout(() => { console.log('Soy beta'); }, 1000);
console.log('Fin');
