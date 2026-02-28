import express from 'express';

const app = express();
const port = process.env.PORT ?? '8080';
const ipAddress = process.env.C9_HOSTNAME ?? 'localhost';

app.get('/', (req, res) => {
  res.json('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Server listening at http://${ ipAddress }:${ port }`);
});
