/**Estudo avançado sobre os parâmetros da função
 * 
 * Nesse caso nós podemos utilizar uma ferramente própria do javascript, onde iremos considerar os argumentos passados na função, mesmo que eles não existam como parâmetros que deveriam ser declarados na função. 'arguments'.
 */

function soma(){
    let total = 0;
    for (let argumentos of arguments) {
        total += argumentos;
    }
    return total;
}

console.log(soma(2, 2));

/**Além disso podemos definir um valor padrão para um parâmetro que não foi passado */
function soma2(a, b = 1, c = 5){
    console.log(a + b + c);
}

//Utilizando o undefined sendo passado como parâmetro é o único jeito de fazer ele assumir o valor padrão, caso exista outro valor após ele.
soma2(2, undefined, 5);