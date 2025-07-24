/**Escopo Léxico 
 * Nesse caso significa que a função pode acessar o valor de uma variável que está na 'bolha'
*/

const nome = 'Peixe';

function falaNome(){
    console.log(nome);
}


function usaFalaNome(){
    const nome = 'Gabriell';
    falaNome(); //Nesse caso a função utiliza o escopo léxico para pegar o valor da variável nome cuja valor é 'Peixe'.
}

falaNome();
usaFalaNome();