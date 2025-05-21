/**Temos 3 maneiras de declararmos funções em JAVASCRIPT
 * A primeira "normal seria essa abaixo, declarando a função com seu nome e parâmetros caso necessário"
 */


function saudacao (nome){
    console.log(`Olá ${nome}, Seja Bem Vindo(a)!!`);
    //return nome   Se eu não colocar o return da função aqui, ela retornará sempre undefined.
}
const teste = saudacao('Peixe');
console.log(teste)

/**A segunda forma seria utilizando arrow functions */
const raiz = n => n ** 0.5; //Nesse caso isso é uma função utilizando arrow functions, onde n é o parâmetro e 

/**A terceira forma seria as funções anônimas usadas quando forem funções curtas ou tem apenas uma função. */
const raiz2 = function(n){
    return n ** 0.5;
}