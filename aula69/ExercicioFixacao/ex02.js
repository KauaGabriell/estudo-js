/**Sua Missão:

Selecione a <ul> no seu JavaScript.

Use .forEach() no array tarefas. Para cada tarefa (string), você deve:

Criar um novo elemento <li> (document.createElement('li')).

Definir o innerText do <li> para o texto da tarefa.

Adicionar (appendChild) o <li> à <ul>. */

const tarefas = ["Estudar JavaScript", "Fazer exercício do LeetCode", "Planejar projeto"];
const ulFake = document.querySelector('#ulFake');
tarefas.forEach(function(elemento){
    const itemLista = document.createElement('li');
    itemLista.innerText = elemento;
    ulFake.appendChild(itemLista);
})