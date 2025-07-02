function soma (x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('Os valores devem ser do tipo number');
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('ola', 2));
} catch (error) {
    console.log(error);
}
