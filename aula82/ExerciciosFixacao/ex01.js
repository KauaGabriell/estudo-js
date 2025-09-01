/**Criar 3 classes
 * Classe pai Aventureiro -> nome e nivel -> metodo atacar
 * Classe guerreiro herda -> nome e nivel e possui arma -> override atacar com a arma
 * Classe Mago herda -> nome e nivel e possui magia -> Override atacar com magia
 */

class Aventureiro {
    constructor(nome, nivel){
        this.nome = nome,
        this.nivel = nivel
    }

    atacar(){
        console.log(`O ${this.nome} está atacando!!!`)
    }
}

class Guerreiro extends Aventureiro{
    constructor(nome, nivel, arma){
        super(nome, nivel);
        this.arma = arma;
    }

    atacar(){
        console.log(`O guerreiro ${this.nome} está atacando com a arma ${this.arma}`);
    }
}

class Mago extends Aventureiro{
    constructor(nome, nivel, magia){
        super(nome, nivel);
        this.magia = magia;
    }

    atacar(){
        console.log(`O guerreiro ${this.nome} está atacando com a magia ${this.magia}`);
    }
}

/**Testando */
const conan = new Guerreiro('Conan', 10, 'Montante');
const gandalf = new Mago('Gandalf', 20, 'Bola de Fogo');

conan.atacar();
gandalf.atacar();