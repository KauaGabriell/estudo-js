/**
 * Valores que podem ser avaliam em falso
 * 
 * 0
 * '' " " ``
 * null/undefined
 * NaN
 * 
 * Qualquer coisa que não seja as citadas acima retornam verdadeiro em js.
 */


//AND &&
function falar(){
    return 'Oi';
}

const vaiExecutar = null;
console.log(vaiExecutar && falar());

//OR ||

console.log(0 || false || null || "Peixe" || true); // Retorna o primeiro valor verdadeiro que no caso é "Peixe" por se diferente dos itens que são avaliados em falso;
//Exemplo "Prático"
const corUsuario = null;
const corPadrao = corUsuario || 'Preto'; //Aqui utilizamos o short circuit para deixar o código mais limpo, nesse caso, caso o usuário selecione uma cor a condição será verificada e vai retornar a cor que será 1º valor verdadeiro, caso o contrário utiliza-se a cor padrão.
