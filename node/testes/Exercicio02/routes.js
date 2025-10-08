const express = require('express');
const route = express.Router();

const { alert, criaContato } = require('./controller');

route.get('/', alert);
route.post('/contatos', criaContato);

module.exports = route;