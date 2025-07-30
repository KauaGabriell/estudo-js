/**Funções geradoras, uma função que entrega resultados diferentes a cada chamada que possui um iterador */

function* geradora(){
    yield 0;
    yield 1;
    yield 2;
}

const g1 = geradora();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
