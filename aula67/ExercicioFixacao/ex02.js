/**Sua Missão: Use o .map() para transformar o array turma em um novo array de objetos.

Novo Formato do Objeto: Cada objeto no novo array deve ter apenas duas propriedades: nome (o nome do aluno) e aprovado (um booleano).

A Regra: A propriedade aprovado será true se a média das notas do aluno for maior ou igual a 7, e false caso contrário. */

const turma = [
    { nome: 'Ana', notas: [8, 9, 7.5, 10] },
    { nome: 'Bruno', notas: [6.5, 7, 5, 8] },
    { nome: 'Carla', notas: [9, 9.5, 10, 9] },
    { nome: 'Daniel', notas: [5, 6, 4.5, 7] },
    { nome: 'Elena', notas: [8.5, 8, 9.5, 10] }
  ];

  const novoArray = turma.map(function(obj){
    let soma = 0;
    for (let i = 0; i < obj.notas.length; i++) {
        soma += obj.notas[i];
    }
    let media = soma / obj.notas.length
    

    return {
        nome: obj.nome,
        aprovado: media >= 7,
    }
  })

  console.log(novoArray);