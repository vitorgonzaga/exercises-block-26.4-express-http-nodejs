## **Exercicios Bloco 26.4 Express HTTP com Node.js**

#### Agora a prática

Inicie os exercícios criando uma aplicação Node.js com os comandos já aprendidos.

- [x] 1. Crie uma rota GET /ping;

  1. Sua rota deve retornar o seguinte JSON: { message: 'pong' }

 <br>

- [x] 2. Crie uma rota POST /hello

  1. Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
  1. Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" }.

 <br>

- [x] 3. Crie uma rota POST /greetings

  1. Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> }.

  1. Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK.

  1. Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .

<br>

- [x] 4. Crie uma rota PUT /users/:name/:age .

  1. Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .

<br>

- [x] 5. Crie uma API de dados das personagens de Simpsons
  - Crie um arquivo chamado simpsons.json e popule com os seguintes dados:

```
[
  {
    "id": "1",
    "name": "Homer Simpson"
  },
  {
    "id": "2",
    "name": "Marge Simpson"
  },
  {
    "id": "3",
    "name": "Bart Simpson"
  },
  {
    "id": "4",
    "name": "Lisa Simpson"
  },
  {
    "id": "5",
    "name": "Maggie Simpson"
  },
  {
    "id": "6",
    "name": "Ned Flanders"
  },
  {
    "id": "7",
    "name": "Montgomery Burns"
  },
  {
    "id": "8",
    "name": "Nelson Muntz"
  },
  {
    "id": "9",
    "name": "Krusty"
  },
  {
    "id": "10",
    "name": "Milhouse Van Houten"
  }
]

```

- Utilize o modulo fs do Node para ler/escrever arquivos.
  Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
- Caso dê tudo certo, a resposta deve voltar com status 200 OK .
- Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman , Insomnia ou httpie .

<br>

- [x] 6. Crie um endpoint GET /simpsons
  1. O endpoint deve retornar um array com todos os simpsons.

<br>

- [x] 7. Crie um endpoint GET /simpsons/:id
  1. O endpoint deve retornar o personagem com o id informado na URL da requisição.
  1. Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .

<br>

- [x] 8. Crie um endpoint POST /simpsons .
  1. Este endpoint deve cadastrar novos personagens.
  1. O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
  1. Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
  1. Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end(); .
