import fs from 'fs/promises';

function main() {
  let resultado = '';
  fs.readFile('001.txt', 'utf-8')
  .then(data => {
    resultado += data;
    return fs.readFile('002.txt', 'utf-8');
  })
  .then(data => {
    resultado += data;
    return fs.readFile('003.txt', 'utf-8');
  })
  .then(data => {
    resultado += data;
    return fs.writeFile('final.txt', resultado);
  })
  .then(() => {
    console.log('¡Éxito!');
  })
  .catch(err => {
    console.error('¡¡¡Error!!!');
    console.error(err);
  });
}

main();
