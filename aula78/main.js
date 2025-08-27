/**Factory Functions + Prototype */

/**Criando os métodos separados*/
const falar = {
    falar(){
        console.log(`${this.nome} está falando...`);
    }
}

const pessoaPrototype = Object.assign({}, falar);

function pessoa(nome) {
    const obj = Object.create(pessoaPrototype);
    obj.nome = nome;
    return obj;
  }

const p1 = pessoa('Peixe');
console.log(p1);