function criarLogger(prefixo){
    return function (mensagem){
        return prefixo + ' ' + mensagem;
    }
}

const logInfo = criarLogger('[INFO]');
console.log(logInfo('Deus é amor!!'));

console.log(mensagem);