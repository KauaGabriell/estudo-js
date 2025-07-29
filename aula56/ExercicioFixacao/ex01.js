const minhaConta = (function(){
    let saldo = 0;
    function verSaldo(){
        return saldo;
    }

    function depositar(valor){
        return saldo += valor;
    }

    function sacar(valor){
        if(valor > saldo){
            console.log('Saldo Insuficiente!!')
        }else{
            return saldo -= valor;
        }
    }

    return {
        deposito: depositar,
        saque: sacar,
        visualizar: verSaldo,
    }
})();

minhaConta.deposito(500);
minhaConta.saque(300);
minhaConta.saque(1000)
console.log(minhaConta.visualizar());