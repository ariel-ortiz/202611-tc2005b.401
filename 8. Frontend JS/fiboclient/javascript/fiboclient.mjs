/* global fetch */

const n = document.getElementById('n');
const fiboButton = document.getElementById('fibo-button');
const salida = document.getElementById('salida');

async function obtenFibonacci() {

  salida.replaceChildren();

  const nValue = parseInt(n.value, 10) || 0;

  if (nValue < 0) {
    salida.innerText = 'Favor de ingresar un entero positivo.';
    return;
  }

  try {
    const res = await fetch('https://lu5h3dapk2rhtaqmqw7ulikide0coupk.lambda-url.us-east-1.on.aws'
                            + `/fibonacci/${nValue}`);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data= await res.json();
    const h2 = document.createElement('h2');
    h2.textContent = `Los primeros ${nValue} elementos de la secuencia de Fibonacci son:`;
    salida.appendChild(h2);

    const ul = document.createElement('ul');
    for (const value of data.values) {
      const li = document.createElement('li');
      li.textContent = value;
      ul.appendChild(li);
    }
    salida.appendChild(ul);

  } catch (err) {
    salida.innerText = `Error: ${err.message}`;
  }

  console.log(`nValue = ${nValue}`);
}

fiboButton.addEventListener('click', obtenFibonacci);
n.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    obtenFibonacci();
  }
});
