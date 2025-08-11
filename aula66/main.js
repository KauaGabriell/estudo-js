/**Array Filter 
 * Sempre retorna um array com a mesma quantidade de elementos ou menos, já que ela filtra.
*/

// Array com 15 números aleatórios
const numerosAleatorios = [23, 67, 45, 12, 89, 34, 78, 56, 91, 3, 67, 42, 18, 95, 7];

const resultado = numerosAleatorios.filter(valor => valor > 10);
console.log(resultado);