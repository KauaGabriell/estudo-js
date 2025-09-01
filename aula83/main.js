/**Métodos de instância e estáticos */
class Calculadora {
  constructor() {
    this.resultado = 0;
  }

  somar(valor) {
    this.resultado += valor;
  }

  limpar() {
    this.resultado = 0;
  }

  static multiplicar(a, b) {
    return a * b;
  }
}

/**Teste */
// Testando os métodos de instância
const calc = new Calculadora();
calc.somar(10);
calc.somar(5);
console.log(calc.resultado); // Saída esperada: 15
calc.limpar();
console.log(calc.resultado); // Saída esperada: 0

// Testando o método estático
const produto = Calculadora.multiplicar(5, 7);
console.log(produto); // Saída esperada: 35

// Testes que devem dar ERRO:
//calc.multiplicar(2, 2); // Erro! Multiplicar é da "fábrica", não do "produto".
//Calculadora.somar(5);    // Erro! Somar é do "produto", não da "fábrica".
