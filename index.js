const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs").promises;
// const fs = require("fs/promises"); // também funciona!

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
  if (parseInt(age) > 17)
    return res.status(401).json({ message: `Hello, ${name}!` });
  return res.status(200).json({ message: "Unauthorized" });
});

// Exercicio 4
app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.params;
  return res.json({
    message: `Seu nome é ${name} e você tem ${age} anos de idade`,
  });
});

// Exercicio 5, 6

const { getSimpsons, writeSimpsons } = require("./fs-utils");
// const rescue = require("express-rescue");
const rescue = require("express-rescue");

app.get(
  "/simpsons",
  rescue(async (_req, res, _next) => {
    const simpsons = await getSimpsons();
    if (!simpsons) return res.status(500).json({ message: "Erro no servidor" });
    return res.status(200).json(simpsons);
  })
);

// Exercicio 7
app.get(
  "/simpsons/:id",
  rescue(async (req, res) => {
    // const { id } = req.params; // primeiro desenvolvimento
    const simpsons = await getSimpsons();
    // const simpsonsById = simpsons.find((item) => item.id === id); // primeiro desenvolvimento
    const simpsonsById = simpsons.find(({ id }) => id === req.params.id); // versão do gabarito
    if (!simpsonsById)
      return res.status(404).json({ message: "simpsons not found" });
    return res.status(200).json(simpsonsById);
  })
);

// Exercicio 8
app.post(
  "/simpsons",
  rescue(async (req, res) => {
    const { id, name } = req.body;
    const simpsons = await getSimpsons();
    if (!simpsons) return res.status(500).json({ message: "erro no servidor" });
    const simpsonsFind = simpsons.find(({ id }) => id === req.body.id);
    if (!simpsonsFind) {
      simpsons.push({ id, name }); //fica na memória e não grava no arquivo
      await writeSimpsons(simpsons); // com o novo personagem
      return res.status(204).end();
    }
    return res.status(409).json({ message: "id already exists" });
  })
);

// versão do gabarito para o exercicio 8

// app.post(
//   '/simpsons',
//   rescue(async (req, res) => {
//     const { id, name } = req.body;

//     const simpsons = await simpsonsUtils.getSimpsons();

//     if (simpsons.map(({ id }) => id).includes(id)) {
//       return res.status(409).json({ message: 'id already exists' });
//     }

//     simpsons.push({ id, name });

//     await simpsonsUtils.setSimpsons(simpsons);

//     res.status(204).end();
//   })
// );

/* ... */

app.listen(port, () => console.log(`servidor ativo na porta ${port}`));
