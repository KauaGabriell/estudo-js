/**Função de Validação de CPF algoritmo */

function ValidaCpf(cpfEnviado) {
  //Função de Validação
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, ''); //Retirando os pontos do e traço do CPF que foi passado.
    },
  });
}

ValidaCpf.prototype.valida = function () {
  //Método de validação
  if (typeof this.cpfLimpo === 'undefined') return false; //Se o CPF não por passado retorna falso(Inválido)
  if (this.cpfLimpo.length !== 11) return false; //Se o CPF não tiver 11 dígitos ele retorna falso(Inválido)
  if (this.isSequencia()) return false; //Função para saber se todos os 11 dígitos são iguais.
  const cpfParcial = this.cpfLimpo.slice(0, -2); //Pega os 9 primeiros dígitos do CPF passado.
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2;
  return novoCpf === this.cpfLimpo;
};

ValidaCpf.prototype.criaDigito = function (cpfParcial) { //Criar dígito
  const cpfArray = Array.from(cpfParcial); //Faz um Array com os números dos 9 primeiros dígitos
  let regressivo = cpfArray.length + 1; //Faz o contador começar no 10 (9 primeiros + 1);
  const total = cpfArray.reduce((acc, val) => { //Reduce para multiplicar e somar os números
    acc += regressivo * Number(val); //Pega o contador que começa em 10 e multiplica pelos dígitos e armazena na soma do acumulador.
    regressivo--; //Diminuindo contador.
    return acc; //Retorna acumulador.
  }, 0);
  const digito = 11 - (total % 11); //Pega o resultado da soma e cria o dígito
  return digito > 9 ? '0' : String(digito); //Verifica se o dígito é maior que 9.
};

ValidaCpf.prototype.isSequencia = function () { //Função para verificar se a sequência existe.
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length); 
  return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCpf('02561622126');

if (cpf.valida()) { //Imprime se é valido ou não.
  console.log('CPF válido');
} else {
  console.log('CPF Inválido');
}
