class Pessoa{
    constructor(primeiroNome, ultimoNome){
        this.primeiroNome = primeiroNome,
        this.ultimoNome = ultimoNome;
    }

    get nomeCompleto(){
        return `${this.primeiroNome} ${this.ultimoNome}`;
    }

    set nomeCompleto(nome){
        nome = nome.split(' ');
        this.primeiroNome = nome.shift(' ');
        this.ultimoNome = nome.join(' ');
        

    }
}

const p1 = new Pessoa('Peixe', 'Gabriell');
console.log(p1.nomeCompleto);
console.log(p1.primeiroNome);
console.log(p1.ultimoNome)

