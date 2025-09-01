/**Herança de Classes */

class Carro {
    constructor(nome, marca, modelo){
        this.nome = nome,
        this.marca = marca, 
        this.modelo = modelo
    }

    acelerar(){
        console.log(`O ${this.nome} está acelerando....`);
    }
}

const golTurbinado = new Carro('Golzin Turbinado', 'VOLKSWAGEN', 'GOL G5 POWER');
golTurbinado.acelerar();

class Moto extends Carro{
    constructor (nome, marca, modelo, cor){
        super(nome, marca, modelo);
        this.cor = cor;
    }
}

const motoca = new Moto('MOTOCA', 'BMW', 'KAWASAKI', 'PRETA');
motoca.acelerar();