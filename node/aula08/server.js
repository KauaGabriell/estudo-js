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
// Middlewares para ler o corpo das requisições (form e JSON)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(form);
});

//Aqui ele recebe o post que fizemos do nosso form que tem o action enviar
app.post('/recebi', (req, res) => {
  console.log(req.body);
  res.send('Recebi os dados aqui patrãooo');
});

app.listen(3001, () => {
  console.log('http://localhost:3001');
  console.log('Servidor escutando na porta 3001...');
});
