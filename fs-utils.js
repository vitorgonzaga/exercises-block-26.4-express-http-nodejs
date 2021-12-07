const fs = require("fs/promises");

const getSimpsons = () => {
  return fs
    .readFile("./simpsons.json", "utf-8")
    .then((fileContent) => JSON.parse(fileContent));
};

// utilizando async/await
// const getSimpsons = async() => {
//   const data = await fs.readFile('./simpsons;json', 'utf-8')
//   return JSON.parse(data);
// }

// Considerando que a função abaixo recebera um objeto
const writeSimpsons = (newSimpsons) => {
  fs.writeFile("./simpsons.json", JSON.stringify(newSimpsons));
};

module.exports = { getSimpsons, writeSimpsons };
