import gerarSenha from './geradores.js'

const senhaGerada = document.querySelector('.senha-gerada')

/**Selecionando opções */
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiuscula = document.querySelector('.chk-maiusculas');
const chkMinuscula= document.querySelector('.chk-minusculas');
const chkNumero = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');

/**Botão */
const btnGerarSenha = document.querySelector('.gerar-senha')


export default () => {
    btnGerarSenha.addEventListener('click', function(){
        senhaGerada.innerHTML = gera();
    })
};

function gera(){
    const senha = gerarSenha(qtdCaracteres.value, chkMaiuscula.checked, chkMinuscula.checked, chkNumero.checked, chkSimbolos.checked);
    return senha || 'Nada Selecionada';
}