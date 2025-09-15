function servidorA(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve('Dados do Servidor A')
        }, 3000);
    })
}

function servidorB(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve('Dados do Servidor B')
        }, 1000);
    })
}

function servidorC(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve('Dados do Servidor C')
        }, 2000);
    })
}

function simularFalha(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            reject(new Error('Servidor de backup offline!'));
        }, 500);
    })
}

const Promessas = [
    servidorA(),
    servidorB(),
    servidorC()
]

const PromessasComFalhas = [
    servidorA(),
    servidorB(),
    simularFalha()
]



Promise.race(Promessas).then(dados =>{
    console.log(dados);
}).catch(erro => console.log(erro));

Promise.race(PromessasComFalhas).then(dados => {
    console.log(dados);
}).catch(erro => console.log(erro));