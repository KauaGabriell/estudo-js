//Pegando elementos
const form = document.getElementById('form');

//Evento de enviar o formulário
form.addEventListener('submit', function (event) {
  event.preventDefault();

  //Pegando elementos input
  const inputPeso = event.target.querySelector('#peso');
  const inputAltura = event.target.querySelector('#altura');

  //Pegando valores do input
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  //Validando Inputs
  if (!peso) {
    setResult('Peso Inválido', false);
    return;
  }

  if (!altura) {
    setResult('Altura Inválida', false);
    return;
  }

  const imc = getIMC(peso, altura);
});

//Função para criar parágrafo do resultado
function criaP() {
  const paragrafoResultado = document.createElement('p');
  return paragrafoResultado;
}

//Função para colocar o resultado na tela
function setResult(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  //Criando elemento no resultado
  const p = criaP();
  p.innerHTML = msg;
  resultado.appendChild(p);
}

//Função para pegar o IMC
function getIMC(peso, altura) {
  const img = peso / altura ** 2;
  return imc.toFixed(2);
}

//Pegando nivel do IMC
function getNivelImc(imc) {
  const nivel = [
    'Abaixo do Peso',
    'Peso normal',
    'Sobrepeso',
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3',
  ];

  if (imc >= 39.9) {
    return nivel[5];
  } 
  if (imc >= 34.9) {
    return nivel[4];
  }
  if (imc >= 29.9) {
    return nivel[3];
  }
  if (imc >= 24.9) {
    return nivel[2];
  }
  if (imc >= 18.5) {
    return nivel[1];
  }
  if(imc < 18.5){
    return nivel [0];
  }
}
