const express = require('express');
const {
  enviarMusicas,
  obterMusicaPorId,
  adicionarMusica,
} = require('../controllers/musicacontroller');
const router = express.Router();

router.get('/musicas', enviarMusicas);
router.get('/musicas/:id', obterMusicaPorId);
router.post('/musicas', adicionarMusica);

module.exports = router;
