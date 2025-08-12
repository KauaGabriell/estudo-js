/**Aqui, o objetivo é provar que o .reduce é tão poderoso que consegue imitar o trabalho do .filter e do .map... ao mesmo tempo.

Sua Missão: Usando uma única chamada ao método .reduce(), crie um novo array contendo apenas os nomes (produto) dos itens da categoria 'Acessórios'.

Resultado Esperado: Um array, [ 'Mouse sem Fio', 'Teclado Mecânico', 'Mousepad' ]. */

const carrinho = [
    { produto: 'Placa de Vídeo', preco: 4500, quantidade: 1, categoria: 'Eletrônicos' },
    { produto: 'Mouse sem Fio', preco: 150, quantidade: 2, categoria: 'Acessórios' },
    { produto: 'Teclado Mecânico', preco: 350, quantidade: 1, categoria: 'Acessórios' },
    { produto: 'Monitor 4K', preco: 2800, quantidade: 1, categoria: 'Eletrônicos' },
    { produto: 'Mousepad', preco: 40, quantidade: 3, categoria: 'Acessórios' }
  ];

  const novoArray = carrinho.reduce(function(acumulador, obj){
    if(obj.categoria == 'Acessórios'){
        acumulador.push(obj.produto);
    }
    return acumulador;
  }, []);

  console.log(novoArray);