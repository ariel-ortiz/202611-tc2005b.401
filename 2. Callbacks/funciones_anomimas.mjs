const funcion_hola = function () {
  console.log('Hola');
}

function main() {
  funcion_hola();
  const f1 = (a, b) => 2 * (a + b);
  const f2 = (a, b) => {
    console.log('otra cosa');
    return 3 * (a - b);
  }
  const f3 = x => 2 ** x;
  console.log(f1(10, 5));
  console.log(f2(10, 5));
  console.log(f3(10));
  console.log((z => 10 * z + 1)(5));
}

main();
