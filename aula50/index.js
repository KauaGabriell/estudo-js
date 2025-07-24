/*Existem várias maneiras de declarar uma função, porém é importante ressaltar também que um delas é a questão do hoisting, que permite nós chamarmos uma função antes mesmo de ela estar declarada no código.*/ 

falarOi();

function falarOi(){
    console.log('Oi');
}

/**Além disso podemos fazer uma 'Funcion Expression', que consiste em uma função guardada em uma variável */

const numeroSomado = function (num1, num2){
    const numeroSomado = num1 + num2;
    return numeroSomado;
}
console.log(numeroSomado(5, 20));

/**Arrow Function */
const funcaoArrow = () =>{
    console.log('Essa é uma Arrow Function');
};