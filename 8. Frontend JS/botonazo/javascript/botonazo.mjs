// JavaScript File

const miBoton = document.getElementById('mi-boton');
const miContador = document.getElementById('mi-contador');
const miEncabezado = document.getElementById('mi-encabezado');
let contador = 0;

function actualizaContador() {
  contador++;
  miContador.innerText = contador;
  if (contador % 5 == 0) {
    miBoton.style.display = 'none'; // Desaparece a miBoton
    setTimeout(() => {
      miBoton.style.display = 'block'; // Reaparece a miBoton
    }, 5000);
  }
}

miBoton.addEventListener('click', actualizaContador);
miContador.addEventListener('dblclick', () => {
  contador = 0;
  miContador.innerText = contador;
});
miEncabezado.addEventListener('mouseenter', () => {
  console.log('Entró el mouse al encabezado');
});
