import fs from 'fs';

function main() {
  console.log('Inicio main');
  fs.readFile('pablito.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error('Hubo un error');
      console.error(err);
      process.exit(1);
    }
    fs.writeFile('PABLITO.txt', data.toUpperCase(), err => {
      if (err) {
        console.log('No se pudo escribir el archivo');
        console.log(err);
        process.exit(1);
      }
      console.log('¡Archivo creado exitosamente!');
    });
  });
  console.log('Final main');
}

main();
