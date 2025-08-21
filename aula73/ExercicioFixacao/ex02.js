function Veiculo(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}

Veiculo.prototype.acelerar = function () {
  console.log('Vruuum!');
};

function Carro(marca, modelo, portas) {
  Veiculo.call(this, marca, modelo);
  this.portas = portas;
}
Carro.prototype = Object.create(Veiculo.prototype);
Carro.prototype.constructor = Carro;

Carro.prototype.abrirPortas = function () {
  console.log('Abrindo Portas');
};

const carro1 = new Carro('VOLKS', 'GOL G5', 4);
console.log(carro1);
carro1.acelerar();
carro1.abrirPortas();
