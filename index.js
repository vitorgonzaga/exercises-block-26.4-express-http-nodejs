const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();

// Utilizando o body-parser para converter os dados da request em JSON;
// A função "use" condiciona a chamada do body-parser antes da execução de cada middleware;
app.use(bodyParser.json());

// Exercicio 1
app.get("/ping", (_req, res) => {
  return res.json({ message: "pong" });
});

// Exercicio 2
app.post("/hello", (req, res) => {
  const { name } = req.body;
  return res.json({ message: `Hello, ${name}!` });
});

// Exercicio 3
app.post("/greetings", (req, res) => {
  const { name, age } = req.body;
  if (age > 17) return res.status(200).json({ message: `Hello, ${name}!` });
  return res.status(401).json({ message: "Unauthorized" });
});

// Exercicio 4
app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.params;
  return res.json({
    message: `Seu nome é ${name} e você tem ${age} anos de idade`,
  });
});

// Exercicio 5

app.listen(port, () => console.log(`servidor ativo na porta ${port}`));
