function calcularFaturamento(listaLivros) {
  const faturamentoTotal = listaLivros.reduce((acc, livro) => {
    if (livro.emEstoque) {
      acc += livro.preco;
      return acc;
    }
    return acc;
  }, 0);
  return faturamentoTotal;
}

function filtrarPorCategoria(listaLivros, categoria){
    return listaLivros.filter(livro => livro.genero === categoria);
}

module.exports = {
    calcularFaturamento: calcularFaturamento,
    filtrarPorCategoria: filtrarPorCategoria
}