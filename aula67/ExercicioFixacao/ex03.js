/**Sua Missão: Usar o .map() para transformar o array turma em um novo array de strings de HTML.

Formato da String: Cada string deve ser um item de lista (<li>), assim: <li>Nome do Aluno - (Aprovado ✅ | Reprovado ❌)</li>.

Desafio Bônus: Depois de ter o array de <li>, vamos usar o método .join('') para juntar tudo em uma única string e envolvê-la com as tags <ul> e </ul>. */

const turma = [
    { nome: 'Ana', notas: [8, 9, 7.5, 10] },
    { nome: 'Bruno', notas: [6.5, 7, 5, 8] },
    { nome: 'Carla', notas: [9, 9.5, 10, 9] },
    { nome: 'Daniel', notas: [5, 6, 4.5, 7] },
    { nome: 'Elena', notas: [8.5, 8, 9.5, 10] }
  ];

  const newArray = turma.map(function(obj){
    let soma = 0;
    for (let i = 0; i < obj.notas.length; i++) {
        soma += obj.notas[i];
    }
    let media = soma / obj.notas.length
    let status = media >= 7 ? 'Aprovado 🟩' : 'Reprovado ❌';


    return `<li>${obj.nome} - ${status}</li>`;
  })
  const relatorioHTML = `<ul>${newArray.join(" ")}</ul>`;
  console.log(relatorioHTML);