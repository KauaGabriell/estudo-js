/*Mais diferenças ente var e let*/

/*Let tem um escopo de bloco, ou seja o escopo dela é de tudo que está entre "{ }"*/
/*Var tem escopo de função, ou seja, cada vez que ela for chamada ela irá ser redeclarada, o que não acontece com let*/

/*Exemplo Let*/
const verdadeira = true;
let nome = 'Joaozin da Maciota'; //Aqui ela exibe todos os nomes mesmo ela tendo valores diferentes em cada bloco, devido ao seu escopo do bloco
console.log(nome);
if(verdadeira){
    let nome = 'Peixe'
    //console.log(nome);
    if(verdadeira){
        let nome = 'João';
        //console.log(nome) 
    }
}

/*Exemplo Var*/
var nome2 = "Ronaldo";

if(verdadeira){
    var nome2 = "Peixe";
}
console.log(nome, nome2); //Aqui ele exibe o primeiro bloco do let, e como o var foi chamado duas vezes, e toda vez que ele é chamado ele é redeclarado então ele exibe a última chamada de falor.