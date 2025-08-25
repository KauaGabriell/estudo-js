/**Revisão de Prototypes Básicos */

function ContaBancaria(titular, saldoInicial){
    this.titular = titular,
    this.saldoInicial = saldoInicial;
}

ContaBancaria.prototype.depositar = function(valor){
    return this.saldoInicial += valor;
}

ContaBancaria.prototype.sacar = function(valor){
    if(valor > this.saldoInicial){
        console.log('Saldo Insuficiente!!')
    }else{
        return this.saldoInicial -= valor;
    }
}

ContaBancaria.prototype.verSaldo = function(){
    console.log(`O valor na sua conta é ${this.saldoInicial}`);
}

const contaInter = new ContaBancaria('Peixe', 2000);
contaInter.verSaldo();

contaInter.depositar(300);
contaInter.verSaldo();

contaInter.sacar(2400);

contaInter.sacar(300);
contaInter.verSaldo();
