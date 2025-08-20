/**Object Define Property and Properties */

/**Property */
/**Função Construtora para construir um produto */
function Produto(nome, preco, estoque) {
  (this.nome = nome),
    (this.preco = preco),
    Object.defineProperty(this, 'estoque', {
      //O this referencia ao próprio objeto, o estoque a propriedade em questão, o 3ºParam é os atributos
      enumerable: true, //mostra a chave
      configurable: true, //Configurável ou não(deletar, etc).
      value: estoque,
      writable: false, //Pode alterar o valor
    });
}

const p1 = new Produto('Camiseta', 159.9, 5);
console.log(p1);

/**Properties */
function ProdutoComProperties(nome, preco, estoque) {
  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      writable: true,
      configurable: true,
      value: nome,
    },
    preco: {
      enumerable: true,
      writable: false,
      configurable: false,
      value: preco,
    },
    estoque: {
      enumerable: true, //mostra a chave
      configurable: true, //Configurável ou não(deletar, etc).
      value: estoque,
      writable: false, //Pode alterar o valor
    },
  });
}

const p2 = new ProdutoComProperties('Calça', 159.90, 5);
console.log(p2);