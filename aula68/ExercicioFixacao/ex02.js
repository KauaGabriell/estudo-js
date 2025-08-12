/**Sua Missão: Use o .reduce() para transformar o array carrinho em um objeto. As chaves desse objeto devem ser os nomes das categorias, e os valores devem ser a soma total dos preços dos produtos daquela categoria.

Resultado Esperado: Um objeto, por exemplo:

{
  Eletrônicos: 7300,
  Acessórios: 770 
}
Dica: O valorInicial do seu reduce será um objeto vazio: {}. */

const carrinho = [
    { produto: 'Placa de Vídeo', preco: 4500, quantidade: 1, categoria: 'Eletrônicos' },
    { produto: 'Mouse sem Fio', preco: 150, quantidade: 2, categoria: 'Acessórios' },
    { produto: 'Teclado Mecânico', preco: 350, quantidade: 1, categoria: 'Acessórios' },
    { produto: 'Monitor 4K', preco: 2800, quantidade: 1, categoria: 'Eletrônicos' },
    { produto: 'Mousepad', preco: 40, quantidade: 3, categoria: 'Acessórios' }
  ];

  const agrupaCategoria = carrinho.reduce(function(total, obj){
    if(total[obj.categoria]){
        total[obj.categoria] += obj.preco * obj.quantidade;
    }else{
        total[obj.categoria] = obj.preco * obj.quantidade;
    }
    return total;
  }, {});

  console.log(agrupaCategoria);