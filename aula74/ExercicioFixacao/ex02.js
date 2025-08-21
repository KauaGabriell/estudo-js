function Mago(nome) {
    this.nome = nome;
  }
  Mago.prototype.lancarFeitico = function(feitico) {
    console.log(`${this.nome} lança o feitiço ${feitico}!`);
  };

  // Nosso aprendiz, criado de forma simples, sem herança
  const aprendiz = {
    nome: 'Morgana'
  };

  Object.setPrototypeOf(aprendiz, Mago.prototype);
  aprendiz.lancarFeitico('Raio do Trovão!')
 