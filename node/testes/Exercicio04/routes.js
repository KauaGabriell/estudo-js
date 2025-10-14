const express = require('express');
const route = express.Router();

const {criarLivro} = require('./controllers/livroController')

route.post('/', criarLivro);

module.exports = route;