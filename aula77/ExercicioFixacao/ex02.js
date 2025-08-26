/** Crie o Componente Base: Crie uma Função Construtora Componente(id). No seu protótipo, adicione um método renderizar() que retorna uma string HTML genérica, como "<div id='${this.id}'>Componente Padrão</div>".

Crie os Componentes Específicos:

Crie um construtor Botao(id, texto) que herde de Componente.

Crie um construtor CampoDeTexto(id, placeholder) que também herde de Componente.

Implemente o Polimorfismo (com Reutilização):

Sobrescreva o método renderizar() no protótipo do Botao. A nova versão deve retornar uma string HTML de um botão, como "<button id='${this.id}'>${this.texto}</button>".

Sobrescreva o método renderizar() no protótipo do CampoDeTexto. A nova versão deve fazer duas coisas:

Primeiro, ela deve chamar e usar o resultado do método renderizar() do seu "pai" (Componente.prototype) para criar a div externa.

Depois, ela deve inserir um <input> dentro dessa div antes de retorná-la.

Crie o Renderizador da Página:

Crie uma função desenharPagina(elementos, containerDOM). Ela deve receber um array de diferentes componentes e um elemento do DOM onde tudo será desenhado.

A função deve percorrer o array, chamar o método renderizar() de cada componente, juntar todo o HTML e inseri-lo no innerHTML do containerDOM.

O Teste Final:
Crie um array com instâncias de Botao e CampoDeTexto e use sua função desenharPagina para renderizá-los em uma div na sua página*/



function Componente(id){
    this.id = id;
}

Componente.prototype.renderizar = function(){
    return(`<div id='${this.id}'> Componente Padrão </div>`);
}

/**Outros Componentes */
function Botao(id, texto){
    Componente.call(this, id);
    this.texto = texto;
}

Botao.prototype = Object.create(Componente.prototype);
Botao.prototype.constructor = Botao;
Botao.prototype.renderizar = function(){
    return(`<button id='${this.id}'>${this.texto}</button>`)
}

function CampoDeTexto(id, placeholder){
    Componente.call(this, id);
    this.placeholder = placeholder;
}

CampoDeTexto.prototype = Object.create(Componente.prototype);
CampoDeTexto.prototype.constructor = CampoDeTexto;
CampoDeTexto.prototype.renderizar =  function(){
    const divPaiHtmL = Componente.prototype.renderizar.call(this);
    const inputHtml = `<input placeholder="${this.placeholder}" />`;
    const htmlFinal = divPaiHtmL.replace('Componente Padrão', inputHtml);
    return htmlFinal;
    
}

const containerDOM = document.querySelector('.containerDOM');
const btn = new Botao(2, 'Enviar');
const elemento2 = new CampoDeTexto(3, 'Clique Aqui');
let elementos = [btn, elemento2]

function desenharPagina(elementos, containerDOM){
    const arrayDeElementos = elementos.map(function(value){
        console.log('O que é o "value"?', value);
        
        // A LINHA DO CRIME:
        return value.renderizar(); 
    })
    arrayPronto = arrayDeElementos.join('');
    containerDOM.innerHTML = arrayPronto;
};

desenharPagina(elementos, containerDOM);



