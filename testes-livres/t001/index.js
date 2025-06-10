//Pegando elementos
const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //Pegando inputs
  const inputNum1 = e.target.querySelector("#num1");
  const inputNum2 = e.target.querySelector("#num2");

  //Valor capturado nos inputs
  const num1 = Number(inputNum1.value);
  const num2 = Number(inputNum2.value);

  //Validação simples dos input de números
  if (!num1 || !num2) {
    addResult("Insira um número Válido!!");
    return;
  }

  somarNums(num1, num2);

  const msg = `O resultado de ${num1} + ${num2} é ${soma}`;
  addResult(msg);
});

function addResult(msg) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = " ";

  const paragrafo = document.createElement("p");
  paragrafo.innerHTML = msg;
  resultado.appendChild(paragrafo);
}

function somarNums(num1, num2) {
  soma = num1 + num2;
  return soma;
}
