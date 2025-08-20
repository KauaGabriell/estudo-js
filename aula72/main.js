/**Getters e Setters */

function Produto(nome, preco, estoque) {
    (this.nome = nome),
    (this.preco = preco);

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
      enumerable: true,
      configurable: true,
      get: function(){
        return estoquePrivado;
      },
      set: function(valor){
        if(typeof valor !== 'number'){
            console.log('Bad Value');
            return  
        }else{
            estoquePrivado = valor;
        }
      }
    });
}

const p1 = new Produto('Camiseta', 159.9, 3);
p1.estoque = 500;
console.log(p1.estoque);