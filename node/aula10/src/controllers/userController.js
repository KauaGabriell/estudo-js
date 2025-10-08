let users = [
  { nome: 'Peixe', email: 'peixe@gmail.com' },
  { nome: 'Mari', email: 'mari@gmail.com' },
];

function readUsers(req, res) {
  res.render('perfil', { usuario: users[0] });
}

module.exports = {
  readUsers: readUsers,
};
