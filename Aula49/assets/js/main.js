const input = document.querySelector(".input-tarefa");
const btnAdicionar = document.querySelector(".btn-tarefa");
const listaTarefas = document.querySelector(".tarefas");

// Cria um item da lista (li)
function criarLi() {
  const li = document.createElement("li");
  return li;
}

// Cria botão de remover tarefa
function criarBotaoRemover(li) {
  li.innerText += " ";
  const botaoRemover = document.createElement("button");
  botaoRemover.innerText = "Apagar";
  botaoRemover.setAttribute("class", "apagar");
  li.appendChild(botaoRemover);
  salvarTarefas();
}

// Cria tarefa
function criarTarefa(nomeTarefa) {
  const li = criarLi();
  listaTarefas.appendChild(li);
  li.innerText = nomeTarefa;
  limparInput();
  criarBotaoRemover(li);
}

// Limpa o input
function limparInput() {
  input.value = "";
  input.focus();
}

// Salva tarefas no localStorage
function salvarTarefas() {
  const tarefasLi = listaTarefas.querySelectorAll("li");
  const arrayTarefas = [];

  for (let tarefa of tarefasLi) {
    let textoTarefa = tarefa.innerText;
    textoTarefa = textoTarefa.replace("Apagar", "").trim();
    arrayTarefas.push(textoTarefa);
  }

  const tarefasJSON = JSON.stringify(arrayTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}

// Carrega tarefas salvas do localStorage
function carregarTarefas() {
  const tarefas = localStorage.getItem("tarefas");
  if (!tarefas) return;
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criarTarefa(tarefa);
  }
}

carregarTarefas();

// Evento de clique no botão adicionar
btnAdicionar.addEventListener("click", function () {
  if (!input.value) return;
  criarTarefa(input.value);
});

// Evento de pressionar Enter no input
input.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    if (!input.value) return;
    criarTarefa(input.value);
  }
});

// Evento de remover tarefa
listaTarefas.addEventListener("click", function (event) {
  const elemento = event.target;
  if (elemento.classList.contains("apagar")) {
    elemento.parentElement.remove();
    salvarTarefas();
  }
});
