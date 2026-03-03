import express from 'express';

const app = express();
const port = process.env.PORT ?? '8080';
const ipAddress = process.env.C9_HOSTNAME ?? 'localhost';

app.get('/', (req, res) => {
  res.json('¡Hola, mundo!');
});

const daysOfWeek = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado"
];

app.get('/fecha', (req, res) => {
  const rightNow = new Date();
  res.json({
    year: rightNow.getFullYear(),
    month: rightNow.getMonth(),
    day: rightNow.getDate(),
    dayOfWeek: daysOfWeek[rightNow.getDay()],
    hour: rightNow.getHours(),
    minute: rightNow.getMinutes(),
    second: rightNow.getSeconds()
  });
});

app.get('/fibonacci/:num', (req, res) => {
  const num = parseInt(req.params.num) || 0;
  const result = [0, 1];
  while (result.length < num) {
    result.push(result.at(-1) + result.at(-2));
  }
  res.json({
    n: num,
    values: result.slice(0, num),
    message: 'life is good!'
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://${ ipAddress }:${ port }`);
});
