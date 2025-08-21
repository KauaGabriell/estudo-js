function Pai(){}

Pai.prototype.saudacao = function(){
    console.log('Eu sou o pai!')
};

const Filho = Object.create(Pai.prototype);
Filho.nome = 'Peixe';
Filho.saudacao();