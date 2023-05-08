import express from 'express'
import * as calculator from './controllers/calculator.js'
const app = express();
const port = 3000;


app.get('/add/:num1/:num2', calculator.add);
app.get('/subtract/:num1/:num2', calculator.subtract);
app.get('/multiply/:num1/:num2', calculator.multiply);
app.get('/divide/:num1/:num2', calculator.divide);

app.listen(port, () => {
  console.log(`Server war starting by port: ${port}`);
});