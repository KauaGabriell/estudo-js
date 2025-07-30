/**Funções construtoras - Faz coisas de forma mais automática do que a construtora, porém é a mesma funcionalidade */

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function (){
        console.log(`${this.nome} é Lindo!`);
    };
}

const p1 = new Pessoa('Peixe', 'Ramos');
p1.metodo();