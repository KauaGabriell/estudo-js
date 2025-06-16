//Selecionando Elementos
const inputTask = document.querySelector("#tarefa");
const btnAdd = document.querySelector("#adicionar");
const lista = document.querySelector("#lista-tarefas");


//Evento principal de tarefa
btnAdd.addEventListener("click", function (event) {
  const tarefa = inputTask.value;
  if (validarCampo(tarefa)) {
    //Criando tarefa
    const li = document.createElement("li");
    const span = document.createElement("span");

    //Criando botão de Remover Tarefa
    const btnRemove = document.createElement("button");

    //Criando checkbox
    const divCheckbox = document.createElement("div");
    const checkbox = document.createElement("input");
    divCheckbox.className = 'divCheck';
    checkbox.type = 'checkbox';

    //Adicionando tarefa a lista
    lista.appendChild(li);
    li.appendChild(span);
    span.innerHTML = tarefa;
    li.classList.add("tarefa");

    //Criando container para os botões
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");
    
    //Adicionando checkbox e botão remover ao container
    btnContainer.appendChild(checkbox);
    checkbox.classList.add('check');
    btnContainer.appendChild(btnRemove);
    btnRemove.classList.add("remover");
    btnRemove.innerText = "Remover";

    //Adicionando container de botões à tarefa
    li.appendChild(btnContainer);

    checkbox.addEventListener('change', function(event){
      if(event.target.checked){
        span.classList.add('checked');
      }else{
        span.classList.remove('checked');
      }
    });

    //Evento para remover a tarefa
    btnRemove.addEventListener('click', function(event){
      li.remove();
    });

    inputTask.value = '';
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
