/*Introdução ao Express*/
const express = require('express');
const app = express();
const form = `
<form method="POST" action="/recebi">
    <input type="text" name="campo" placeholder="Digite algo aqui..." required>
    <button type="submit">Enviar</button>
</form>
`;

/**Requisição e Resposta */

/**
 * CREATE READ UPDATE DELETE (CRUD)
 * POST   GET  PUT    DELETE
 *
 *
 */

app.get('/', (req, res) => { //Aqui ele tem o form e caso tentemos alterar para POST ele da erro 404
  res.send(form);
});

app.post('/recebi', (req, res) =>{  //Aqui ele recebe o post que fizemos do nosso form que tem o action enviar
    res.send('Recebi os dados aqui patrão');
})

app.listen(3000, () => {
  console.log('http://localhost:3000');
  console.log('Servidor escutando na porta 3000...');
});
