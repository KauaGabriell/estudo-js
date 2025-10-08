// Um "banco de dados" fake de músicas
let musicas = [
  { id: 1, nome: 'Bohemian Rhapsody', artista: 'Queen' },
  { id: 2, nome: 'Imagine', artista: 'John Lennon' },
];

function enviarMusicas(req, res) {
  res.json(musicas);
}

function obterMusicaPorId(req, res) {
  const musica = musicas.find((m) => m.id === Number(req.params.id));
  if (!musica) {
    return res.status(404).json({ erro: 'Música não encontrada' });
  }
  res.json(musica);
}

function adicionarMusica(req, res) {
  const novaMusica = {
    id: Date.now(),
    nome: req.body.nome,
    artista: req.body.artista,
  };
  musicas.push(novaMusica);
  res.status(201).json(novaMusica);
}

module.exports = {
  enviarMusicas,
  obterMusicaPorId,
  adicionarMusica,
  musicas, // Exportar o array para uso em outras partes se necessário
};
