const anotacoesDOM = new Map();

const btnSalvar = document.querySelector('#btn-salvar');
const btnCancelar = document.querySelector('#btn-cancelar');
const infoBox = document.querySelector('#info-box');

anotacoesDOM.set(btnSalvar, {descricao: 'Este Botão envia os dados para o servidor', cliques: 0});
anotacoesDOM.set(btnCancelar, {descricao: 'Este botão reverte as alterações.', cliques: 0});

console.log(anotacoesDOM.has(infoBox));
const btnSalvarAnotation = (anotacoesDOM.get(btnSalvar));
console.log(btnSalvarAnotation.descricao);

btnSalvar.addEventListener('click', function(e){
    const el = e.target;
    const anotacaoClicada = anotacoesDOM.get(btnSalvar);
    anotacaoClicada.cliques++;
    anotacoesDOM.set(btnSalvar, anotacaoClicada)

    console.log(anotacoesDOM);

})