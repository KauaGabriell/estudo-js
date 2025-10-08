let  users = [
  { id: 1, nome: 'Peixe', email: 'peixe@gmail.com' },
  { id: 2, nome: 'Pedro Broxa', email: 'pedro@gmail.com' },
];

/**Listando todos os usuários (/user) */
function readUsers(req, res) {
  res.send(users);
}

/**Listando apenas o usuário do ID (/user/:id) */
function readUsersId(req, res) {
  const idProcurado = Number(req.params.id);

  const userProcurado = users.find((user) => user.id === idProcurado);

  if (!userProcurado) {
      return res.status(400).send('Usuário não encontrado');

  }

  res.send(userProcurado);
}

/**Criando um usuário (/users - POST) */
function createUser(req, res) {
  const newUser = {
    id: 3,
    nome: req.body.nome,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
}

/**Atualizando um usuário (/users - PUT) */
function updateUser(req, res) {
  const idProcurado = Number(req.params.id);
  const { nome, email } = req.body;

  const indexUser = users.findIndex((user) => user.id === idProcurado);
  if (indexUser == -1) {
    return res.status(400).json({ message: 'Não foi possível encontrar o usuário!' });
  }
  users[indexUser] = { ...users[indexUser], nome: nome, email: email };
  res.status(201).json(users);
}

/**Deletando um usuário (/user - DELETE) */
function deleteUser(req, res){
    const idProcurado = Number(req.params.id);

    const newArrUsers = users.filter((user) => user.id !== idProcurado);
    users = newArrUsers;
    res.status(201).json(newArrUsers);
}

module.exports = {
  readUsers: readUsers,
  readUsersId: readUsersId,
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser
};
