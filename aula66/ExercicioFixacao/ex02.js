const produtos = [
    { id: 1, nome: 'Notebook Gamer', preco: 4500, categoria: 'Eletrônicos', emEstoque: true, tags: ['gamer', 'promoção', 'computador'] },
    { id: 2, nome: 'Mouse sem Fio', preco: 150, categoria: 'Acessórios', emEstoque: true, tags: ['periférico', 'sem fio'] },
    { id: 3, nome: 'Teclado Mecânico', preco: 350, categoria: 'Acessórios', emEstoque: false, tags: ['mecânico', 'gamer', 'periférico'] },
    { id: 4, nome: 'Monitor 4K', preco: 2800, categoria: 'Eletrônicos', emEstoque: true, tags: ['tela', '4k', 'gamer'] },
    { id: 5, nome: 'Cadeira de Escritório', preco: 950, categoria: 'Móveis', emEstoque: true, tags: ['conforto', 'ergonômica'] },
    { id: 6, nome: 'Fone de Ouvido Bluetooth', preco: 420, categoria: 'Acessórios', emEstoque: false, tags: ['áudio', 'sem fio', 'promoção'] },
    { id: 7, nome: 'Webcam HD', preco: 80, categoria: 'Acessórios', emEstoque: true, tags: ['vídeo', 'streaming'] }
  ];

  /**Exercício das 3 filtragens */

  /**Exercício 01 */
  const acessorios = produtos.filter(produto => produto.categoria == 'Acessórios' && produto.emEstoque == true);
  //console.log(acessorios);

  /**Exercício 02 */
function buscarPorTags(lista, tagsDesejadas = []){
    return lista.filter(produtos => produtos.tags.some(tag => tagsDesejadas.includes(tag)));
}

//console.log(buscarPorTags(produtos, tags = ['vídeo']));


/**Exercício 03 */
const filtragemTotal = produtos.filter(produtos => produtos.preco > 400 && ((produtos.categoria == 'Eletrônicos') || (produtos.categoria == 'Acessórios')) && produtos.tags.includes('gamer'));
console.log(filtragemTotal);