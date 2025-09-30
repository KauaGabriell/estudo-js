class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

const teste = 'Testando export';

module.exports = {
  Pessoa: Pessoa,
  teste: teste,
};
