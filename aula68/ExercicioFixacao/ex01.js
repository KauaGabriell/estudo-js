/**Sua Missão: Use o .reduce() para calcular o valor total do carrinho. Você precisará multiplicar o preco pela quantidade de cada item e somar tudo.

Resultado Esperado: Um único número, por exemplo: 8070. */

const carrinho = [
    { produto: 'Placa de Vídeo', preco: 4500, quantidade: 1, categoria: 'Eletrônicos' },
    { produto: 'Mouse sem Fio', preco: 150, quantidade: 2, categoria: 'Acessórios' },
    { produto: 'Teclado Mecânico', preco: 350, quantidade: 1, categoria: 'Acessórios' },
    { produto: 'Monitor 4K', preco: 2800, quantidade: 1, categoria: 'Eletrônicos' },
    { produto: 'Mousepad', preco: 40, quantidade: 3, categoria: 'Acessórios' }
  ];

  const carrinhoTotal = carrinho.reduce(function(total, obj){
   total += obj.preco * obj.quantidade;
   return total;
  }, 0);
  console.log(carrinhoTotal);