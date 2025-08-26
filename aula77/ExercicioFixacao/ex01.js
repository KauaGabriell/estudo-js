/**Crie o "Molde" Base: Crie uma Função Construtora Instrumento(nome). No seu protótipo, adicione um método tocar() que dá um console.log de um som genérico, como "Tocando uma nota...".

Crie os Instrumentos Especializados:

Crie um construtor Violino(nome, afinacao) que herde de Instrumento.

Crie um construtor Tambor(nome, tipo) que também herde de Instrumento.

Implemente o Polimorfismo:

Sobrescreva (Override) o método tocar() no protótipo do Violino. A nova versão deve dar um console.log com um som específico: "O violino ${this.nome} soa: Fí fí fí fi!".

O Tambor não precisa de um método tocar() próprio, ele vai usar o que herdou do Instrumento.

Crie a Orquestra:

Crie uma função chamada apresentacao(instrumentos). Ela deve receber um array de diferentes instrumentos.

Dentro dessa função, percorra o array e chame o método tocar() em cada instrumento.

O Teste Final:
Crie um array com uma mistura de violinos e tambores e passe-o para a sua função apresentacao(). Observe como a mesma chamada de função (instrumento.tocar()) produz resultados diferentes dependendo do tipo do objeto. */

let instrumentos = [];

function Instrumentos(nome){
    this.nome = nome;
}
/**Método dos Instrumentos Base */
Instrumentos.prototype.tocar = function(){
    console.log(`Som genérico...`);
}
/**Outros Instrumentos */

function Violino(nome, afinacao){
    Instrumentos.call(this, nome);
    this.afinacao = afinacao;
}

Violino.prototype = Object.create(Instrumentos.prototype);
Violino.prototype.constructor = Violino;
/**Polimorfismo */
Violino.prototype.tocar = function(){
    console.log(`FI FI FI FI FI`);
}


function Tambor(nome, tipo){
    Instrumentos.call(this, nome);
    this.tipo = tipo;
}

Tambor.prototype = Object.create(Instrumentos.prototype);
Tambor.prototype.constructor = Tambor;

function apresentacao(instrumentos){
    instrumentos.forEach(instrumento => {
        instrumento.tocar();
    });
}

// Criando o array com 3 instrumentos
let orquestra = [
    new Violino("Stradivarius", "Lá"),
    new Tambor("Bumbo", "Percussão"),
    new Violino("Guarneri", "Ré")
];

// Testando a apresentação
apresentacao(orquestra);