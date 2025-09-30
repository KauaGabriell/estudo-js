const utils = require('./utils');
const livros = require('./dados');

console.log(`Faturamento dos livros de Fantasia: R$ ${utils.calcularFaturamento(utils.filtrarPorCategoria(livros, 'Ficção Científica')).toFixed(2)}`);
console.log(utils.calcularFaturamento(livros))