  function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
  };

  /**Objeto Pai - Conta Principal */
  Conta.prototype.sacar = function (valor){
    valor > this.saldo ? console.log('Saldo Insuficiente') : this.saldo -= valor;
    this.verSaldo();
  };

  Conta.prototype.verSaldo =  function(){
    console.log(`AG: ${this.agencia}, Conta: ${this.conta}, | Saldo: ${this.saldo.toFixed(2)}`);
  }

  /**Conta Corrente */
  function contaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
  }

  contaCorrente.prototype = Object.create(Conta.prototype);
  contaCorrente.prototype.constructor = contaCorrente;
  
  contaCorrente.prototype.sacar = function (valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo ou Limite Insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
  };


  const CC = new contaCorrente(11, 22, 0, 100);

  /**Conta Poupança */
  function contaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
  }

  contaPoupanca.prototype = Object.create(Conta.prototype);
  contaPoupanca.prototype.constructor = contaPoupanca;

  const CP = new contaPoupanca(33, 44, 0);

  /**Conta Corrente */
  CC.verSaldo();
  CC.sacar(100);
  CC.sacar(120);


console.log()
  /**Conta Poupança */
  CP.sacar(10);
  
  