function piramide(n) {
  let resultado = [];
  for (let ren = 1; ren <= n; ren++) {
    resultado.push('*'.repeat(ren));
  }
  console.log(resultado.join('\n'));
}

piramide(5);
