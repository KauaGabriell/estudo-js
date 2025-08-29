class Carrinho{
    constructor(){
         this._items = [];
    }

    get items (){
        const itemsCopia = [...this._items];
        return itemsCopia;
    }

    get total(){
        const totalDosProdutos = this._items.reduce(function(acc, produto){
            acc += produto.preco;
            return acc;
        }, 0)
        return totalDosProdutos;
    }

    set item(item){
       this._items.push(item);
    }
}

const meuCarrinho = new Carrinho();
console.log('Total Inicial: ', meuCarrinho.total);

meuCarrinho.item = {nome: 'Teclado Mecânico', preco: 350},
meuCarrinho.item = {nome: 'Mouse Gamer', preco: 150};

console.log('Itens No Carrinho: ', meuCarrinho.items);
console.log('Novo total:', meuCarrinho.total); 

console.log('--- Teste de Segurança ---');
const itensCopiados = meuCarrinho.items;
itensCopiados.push({ nome: 'Item Malicioso', preco: 1000 });

console.log('Itens copiados (modificados):', itensCopiados);
console.log('Itens originais (devem estar intactos):', meuCarrinho.items);

console.log('Novo total:', meuCarrinho.total); 
