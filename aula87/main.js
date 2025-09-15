/**Métodos de Promisses
 * all -> Retorna todas as Promisses de um array resolvidas
 * race -> Retorna a que executar primeiro
 * resolve -> resolve um promisse ou se utiliza de um promisse resolvida
 * reject -> rejeita um promisse ou se utiliza de uma promisse rejeitada.
 */


function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()  * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof(msg) !== 'string'){
            reject(new Error('BAD VALUE'));
        }


        setTimeout(() =>{
            resolve(msg);
        }, tempo)
    });
}

const Promisses = 
[
    'Primeira',
    esperaAi('Segunda que veio da função', rand(1, 3)),
    'Terceira'
];

/**Usando o All */
Promise.all(Promisses).then(promessas =>{
    console.log(promessas);
});

/**Usando o Race
 * Sempre que tiver um valor que não precise de espera ele irá retornar esse valor como se fosse uma promessa resolvida.
 */
Promise.race(Promisses).then(promessas => {
    console.log(promessas)
})


/**Exemplo usando o resolve e reject */
function baixarPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Página em Cache');
    }else{
        return esperaAi('Baixei a página', rand(1, 5));
    }
}

baixarPagina().then(resposta =>{
    console.log(resposta);
}).catch(e => {
    console.log(e);
});