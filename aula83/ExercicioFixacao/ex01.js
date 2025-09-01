class Grimorio {
    constructor(){
        this.feiticos = [];
    }

    adicionarFeitico(feitico){
        this.feiticos.push(feitico);
    }

    static validarPoder(poder){
        return (poder >= 0 && poder <= 100) ? true : false;
    }
}

// Testando o método estático (a "lei universal")
console.log(Grimorio.validarPoder(50));  // Saída esperada: true
console.log(Grimorio.validarPoder(150)); // Saída esperada: false

// Testando os métodos de instância (o livro específico)
const grimorioDeFogo = new Grimorio();
grimorioDeFogo.adicionarFeitico('Bola de Fogo');
grimorioDeFogo.adicionarFeitico('Muralha de Chamas');

console.log(grimorioDeFogo.feiticos); // Saída esperada: ['Bola de Fogo', 'Muralha de Chamas']