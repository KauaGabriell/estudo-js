function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        fala(assunto){
            return `${this.nome} está falando sobre ${assunto}`;
        },
    };
}

const p1 = criaPessoa('Peixe', 'Ramos');
console.log(p1.fala('Programação'));