export const add = (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  const result = num1 + num2;
  res.send(result.toString());
}

export const subtract = (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  const result = num1 - num2;
  res.send(result.toString());
}

export const multiply = (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  const result = num1 * num2;
  res.send(result.toString());
}

export const divide = (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  if (num2 === 0) {
    res.status(400).send('Division by zero is not possible');
  } else {
    const result = num1 / num2;
    res.send(result.toString());
  }
}