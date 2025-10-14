exports.paginaInicial = (req, res) => {
  res.render('index', {
    titulo: 'HomePage'
  });
};

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de POST.');
};
