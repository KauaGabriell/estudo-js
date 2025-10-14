const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    autor: String
})

const Livro = mongoose.model('Livro', LivroSchema);

module.exports = {
    Livro: Livro
}