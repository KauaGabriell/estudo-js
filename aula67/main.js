/**Array Map 
 * O array map vai fazer com que o novo array sempre tenha o mesmo número de elementos do array original
 * ele modifica os valores do array
*/

// Array com 10 números aleatórios
const numerosAleatorios = [7, 23, 45, 12, 89, 34, 67, 91, 3, 56];
const numerosDobrados = numerosAleatorios.map(valor => valor * 2);

console.log(numerosDobrados);

/**Exercício */
// Array de objetos com nome e idade
const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 22 },
    { nome: "Ana", idade: 28 },
    { nome: "Carlos", idade: 35 },
    { nome: "Lucia", idade: 27 }
];

/**Para cada elemento retorne apenas uma string com o nome da pessoa */
const apenasNome = pessoas.map(nome => nome.nome);
console.log(apenasNome);

/**Remova a chave "Nome do Objeto" */
const idade = pessoas.map(obj => ({idade: obj.idade}));
console.log(idade)

/**Adicione uma chave id em cada objeto */
const addID = pessoas.map(function(obj, indice){
    obj.id = indice;
    return obj;
})
console.log(addID);

/**Nesse exercício acima nós alteramos o valor do objeto orignal
 * caso queira criar um objeto a partir do original teria que fazer
 * da seguinte forma:
*/

const newAddId = pessoas.map(function(obj, indice){
    const newOBJ = {...obj};
    obj.id = indice;
    return newOBJ;
})

console.log(newAddId);
console.log(pessoas);


