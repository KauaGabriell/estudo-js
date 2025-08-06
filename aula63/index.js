/**Revisão Básica de Arrays */

const nomes = ['Peixe', 'Jão', 'Mari'];

/**Adicionar itens no array */

/**Final */
nomes.push('Davi');
console.log(nomes);

/**Começo */
nomes.unshift('Garcia');
console.log(nomes);

/**Transformando uma string em um Array */
const string = 'Kauã Gabriell Nazário de Azevedo';
const array = string.split(' ');
console.log(array);

/**Transformando Array em string */
const stringNova = array.join(' ');
console.log(stringNova);

/**Cortar um array */
console.log(nomes);
const novo = nomes.slice(0, 2);
console.log(novo);