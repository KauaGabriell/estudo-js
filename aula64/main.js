/**Método de Arrays 'Splice' 
 * É um método que permite fazer adições e remoções no array de uma vez só.
*/

const nomes = ['Peixe', 'João', 'Mari', 'Davi'];

//Splice('indice', 'qtdElementos para remover', 'elementos para adicionar');

/**Adicionando(Simulando o Push) */
nomes.splice(nomes.length, 0, 'Kauã');
console.log(nomes);

/**Adicionando(Simulando o unshift) */
nomes.splice(0, 0, 'Kauã'); // -> Passando o indíce do primeiro elemento e depois adicionando.
console.log(nomes);

/**Removendo(Simulando o shift) */
nomes.splice(0, 1);
console.log(nomes);

/**Removendo(Simulando o unshift) */
nomes.splice(0, 1);
console.log(nomes);

 const arrayCompleto = ['Peixe', 'Jão', 'Mari'];
 /**Splice Completo */
 console.log(arrayCompleto);
 arrayCompleto.splice(0, 1, 'Kauã');
 console.log(arrayCompleto);

