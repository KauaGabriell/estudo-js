const express = require('express');
const route = express.Router();

const {readUsers, readUsersId, createUser, updateUser, deleteUser} = require('../controllers/userController');

route.get('/users', readUsers);
route.get('/users/:id', readUsersId)
route.post('/users', createUser);
route.put('/users/:id', updateUser)
route.delete('/users/:id', deleteUser)

module.exports = route;