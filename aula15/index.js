let num1 = 1;
let num2 = 2.5434343;

num1 = num1.toString(); //Transforma number em string
console.log(typeof num1);

num1 = num1.toString(2); //Transforma para número binário.

num2 = num2.toFixed(2); //Casas decimais
console.log(num2);

let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); //Verifica se o número não é um número, caso algo não seja um número ele retorna true.
