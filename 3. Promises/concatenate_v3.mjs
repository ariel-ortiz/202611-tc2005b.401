import fs from 'fs/promises';

async function main() {
  try {
    let resultado = '';
    let nombres = ['001.txt', '002.txt', '003.txt'];
    for (const nombre of nombres) {
      let data = await fs.readFile(nombre, 'utf-8');
      resultado += data;
    }
    await fs.writeFile('final.txt', resultado);
    console.log('¡Éxito!');
  } catch (err) {
    console.error('¡¡¡Error!!!');
    console.error(err);
  }
}

console.log('Inicio');
main();
console.log('Final');
