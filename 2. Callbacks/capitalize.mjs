import fs from 'fs';

function main() {
  fs.readFile('pablito.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error('Hubo un error');
      console.error(err);
      process.exit(1);
    }
    console.log(data.toUpperCase());
  });
}

main();
