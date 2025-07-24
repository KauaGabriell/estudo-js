/**Exercício para fixação da aula 52 */

function criarAcao(sujeito){
    return function(verbo){
        return sujeito + ' ' + verbo;
    }
}

const acao1  = criarAcao('Monstro');
console.log(acao1('Ataca com a espada'));