const express = require('express');
const app = express();
const rotas = require('./src/routes/musicaroutes');

// Middleware para ler JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar as rotas do arquivo musicaroutes.js
app.use('/', rotas);

app.listen(3000, () => {
  console.log('Servidor principal rodando na porta 3000...');
});
