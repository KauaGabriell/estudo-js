function Veiculo(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  Veiculo.prototype.acelerar = function(){
    console.log('Vruummm');
  }

  const carro = new Veiculo;
  carro.acelerar();

  const moto = new Veiculo;
  moto.acelerar();