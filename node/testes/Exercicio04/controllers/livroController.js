const livroModel = require('../models/livro');

async function criarLivro(req, res){
    try {
        const {titulo, autor} = req.body;
        const novoLivro = new livroModel.Livro({titulo: titulo, autor: autor})
        await novoLivro.save();
        res.status(201).json(novoLivro);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    criarLivro: criarLivro
}