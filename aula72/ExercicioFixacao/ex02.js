const usuario = {
    primeiroNome: 'João',
    ultimoNome: 'Silva',
    
    get nomeCompleto(){
        return `${this.primeiroNome} ${this.ultimoNome}`;
    },

    set nomeCompleto(nomeCompleto){
        const nomeSeparado = nomeCompleto.split(' ');
        this.primeiroNome = nomeSeparado[0];
        this.ultimoNome = nomeSeparado[nomeSeparado.length - 1];
    }
}

console.log(usuario.nomeCompleto);
usuario.nomeCompleto = 'Peixe Silva Junior';
console.log(usuario.primeiroNome)
console.log(usuario.ultimoNome)
console.log(usuario.nomeCompleto);


