function Produto(nome, preco){
    this.nome = nome,
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco -  (percentual * (this.preco / 100));
}

const produto01 = new Produto('Minimal Club', 150);
console.log(produto01);

produto01.desconto(10)
console.log(produto01);

const p3 = Object.create(Produto.prototype);
p3.preco = 100
console.log(p3);
p3.desconto(20);
console.log(p3);