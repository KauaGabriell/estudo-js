//Selecionando Elementos
const inputTask = document.querySelector("#tarefa");
const btnAdd = document.querySelector("#adicionar");
const lista = document.querySelector("#lista-tarefas");

//Evento ao clicar no botão
btnAdd.addEventListener("click", function (event) {
  const tarefa = inputTask.value;
  if (validarCampo(tarefa)) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    lista.appendChild(li);
    li.appendChild(span);
    span.innerHTML = tarefa;
    li.classList.add("tarefa");
    return;
  }
});

//Função para validar campo de inserir o nome da tabela.
function validarCampo(tarefa) {
  if(tarefa == ''){
    alert('Insira o nome de uma tarefa!');
    return false;
  }

  //Validando Regex
  const regex = /^[a-zA-ZÀ-ÿ0-9\s]{1,100}$/;
  if(!regex.test(tarefa)){
    alert('O nome da tarefa não pode ter nenhum caractere especial. Por favor tente novamente!');
    return false;
  }
  return true;
}
