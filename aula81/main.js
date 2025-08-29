const _velocidade = Symbol('velocidade'); 
class Carro {
    constructor(nome){
        this.nome = nome, 
        this[_velocidade] = 0;
    }

    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor < 0) return;
        this[_velocidade] = valor;
    }

    get velocidade(){
        return this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
}

const GT = new Carro('GTR');

/**Acelerando o Carro */
for(let i = 0; i < 150; i++){
    GT.acelerar();
}

console.log(GT.velocidade);
GT.velocidade = 90;
console.log(GT.velocidade);
