//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a letra A

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const letras = pessoas.filter(valor => valor.nome.length > 5);
console.log(letras);

const mais50 = pessoas.filter(valor => valor.idade > 50);
console.log(mais50);

const letraA = pessoas.filter(valor => valor.nome.toLocaleLowerCase().endsWith('a'));
console.log(letraA);
