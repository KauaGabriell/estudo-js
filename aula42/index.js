//Utilizando Operador de Condição Ternário
function maxNumber (num1, num2){
   return num1 > num2 ? num1 : num2;
}
console.log(maxNumber(5, 10));

//Utilizando Arrow Function
const maxNumber2 = (num1, num2) => num1 > num2 ? num1 : num2;
console.log(maxNumber2(10, 11));