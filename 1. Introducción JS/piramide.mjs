function piramide(n) {
  let resultado = '';
  for (let ren = 1; ren <= n; ren++) {
    resultado += '*'.repeat(ren) + '\n';
  }
  return resultado;
}

console.log(piramide(5));
