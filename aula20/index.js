//Criar objeto
const pessoa01 = {
    nome: 'Peixe',
    sobrenome: 'Azevedo',
    idade: 21,

    //Aqui criamos os métodos que são ações que o usuário pode fazer.
    fala() {
        console.log(`Olá meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade}`);
    }
}

pessoa01.fala();


function confirmarConvidado(nome, sobrenome, qtdPessoas){
    return {
        nome,
        sobrenome,
        qtdPessoas,
    }
}

const convidado01 = confirmarConvidado('Peixe', 'Azevedo', 10);
console.log(`${convidado01.nome} ${convidado01.sobrenome} está confirmado e com ele irá ${convidado01.qtdPessoas} para o casamento`);