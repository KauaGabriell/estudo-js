/**Retorno de Função */
/**O retorno da função segue normal, porém podemos também retornar uma função dentro de outra função */

function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
console.log(duplica(5));
console.log(triplica(3));