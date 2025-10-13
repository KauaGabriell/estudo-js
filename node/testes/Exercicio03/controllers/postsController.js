let posts = require('../posts.json');
const fs = require('fs').promises;

function readPosts(req, res) {
  res.send(posts);
}

async function createPost(req, res) {
  const { titulo, conteudo } = req.body;

  //Lendo o arquivo
  const postJson = await fs.readFile('./posts.json', 'utf-8');
  const arrayPost = JSON.parse(postJson); //Transoformando em JSON

  const newPost = {
    titulo: titulo,
    conteudo: conteudo,
    id: arrayPost.length + 1,
    data: new Date().toISOString(),
  };
  arrayPost.push(newPost); //Adicionando ao Array

  const arrayJSON = JSON.stringify(arrayPost, null, 2);

  await fs.writeFile('./posts.json', arrayJSON);

  res.status(201).json(newPost);
}

async function deletePost(req, res) {
  const postJson = await fs.readFile('./posts.json', 'utf-8');
  const arrayPost = JSON.parse(postJson); //Transformando em JSON
  const idProcurado = req.params.id;

  const arrayFiltrado = arrayPost.filter((post) => post.id != idProcurado);
  const arrayJSON = JSON.stringify(arrayFiltrado, null, 2);
  await fs.writeFile('./posts.json', arrayJSON);
  

  res.status(200).json({ message: 'Post deletado com sucesso' });
}

module.exports = {
  readPosts: readPosts,
  createPost: createPost,
  deletePost: deletePost,
};
