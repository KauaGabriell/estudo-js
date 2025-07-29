function calcular(num1, num2, callback){
    if(callback) return callback(num1, num2);
}

function somar(num1, num2){
    return num1 + num2;
}

function multiplicar(num1, num2){
    return num1 * num2;
};

console.log(calcular(10, 5, somar));