/**Sua Missão: Use o .map() para transformar o array turma em um novo array de strings. Cada string deve estar no formato: "Nome do Aluno - Média: X.X".

Dica: Dentro do seu callback, você precisará calcular a média das notas de cada aluno para poder montar a string.

Exemplo do Resultado Esperado: [ "Ana - Média: 8.6", "Bruno - Média: 6.6", ... ] */

const turma = [
    { nome: 'Ana', notas: [8, 9, 7.5, 10] },
    { nome: 'Bruno', notas: [6.5, 7, 5, 8] },
    { nome: 'Carla', notas: [9, 9.5, 10, 9] },
    { nome: 'Daniel', notas: [5, 6, 4.5, 7] },
    { nome: 'Elena', notas: [8.5, 8, 9.5, 10] }
  ];

  const mediaTurma = turma.map(function(obj){
    let soma = 0;
    for (let i = 0; i < obj.notas.length; i++) {
        soma += obj.notas[i];
    }
    let media = soma / obj.notas.length;        
    return `${obj.nome} - ${media.toFixed(1)}`;
  })

  console.log(mediaTurma);