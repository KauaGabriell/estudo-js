/**Array Reduce
 * Reduz o array para apenas um elemento
 */

const nums = [1, 5, 8, 24, 2, 97, 12, 53];
const somaPares = nums.reduce(function(soma, valor){
    if(valor % 2 === 0) soma += valor;
    return soma;
}, 0)
console.log(somaPares);




// Array de objetos com nome e idade
const pessoas = [
    {nome: "João", idade: 25},
    {nome: "Maria", idade: 32},
    {nome: "Pedro", idade: 28},
    {nome: "Carlos", idade: 45},
    {nome: "Lucia", idade: 37},
    {nome: "Ana", idade: 19},
];

const pessoaVelha = pessoas.reduce(function(acumulador, obj){
    if(acumulador.idade > obj.idade) return acumulador;
    return obj;
});

console.log(pessoaVelha);
