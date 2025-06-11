//Exemplo de atribuição via desestruturação(Arrays), esse exemplo é de um exercício que fizemos no começo do curso, agora com esse conhecimento estamos fazendo de outra forma. Essa atribuição é para facilitar alguns processos de atribuição
let a = 'A';
let b = 'B';
let c = 'C';

const letras = ['B', 'C', 'A'];
[a, b, c] = letras;
console.log(a, b ,c)

/*Exemplo 02*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, dois, ...rest] = numeros; //Aqui vamos a desestruturação do array e utilizamos o resto para pegar todo o array que sobrou.
console.log(um, dois, rest);

/*Operador Rest*/
/*Operador "..." faz com que nos seja possível pegar o resto de algo, ele pode ser associado tanto a função de resto mesmo, ou ele pode ser um spread(distribuir) o operador é o mesmo, mas o que muda é o contexto.*/