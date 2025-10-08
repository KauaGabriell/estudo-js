const express = require('express');
const route = express.Router();

const { readUsers } = require('../controllers/userController');

route.get('/users', readUsers);

module.exports = route;