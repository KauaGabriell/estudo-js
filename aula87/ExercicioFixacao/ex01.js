function carregarUsuario(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve({
                id: 1,
                nome: 'Alice',
            })
        }, 2000);
    })
}

function carregarProdutos(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve([
                'Teclado',
                'Mouse',
                'Monitor',
            ])
        }, 1500);
    })
}

function carregarConfiguracoes(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve({
                tema: 'dark',
                idioma: 'pt-BR',
            })
        }, 3000);
    })
}

function simularFalha(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            reject(new Error('Falha na autenticação do token!'));
        }, 1000);
    })
}

const Promessas = [
    carregarUsuario(),
    carregarProdutos(),
    carregarConfiguracoes(),
]

const PromessasComFalhas = [
    carregarUsuario(),
    //carregarProdutos(),
    carregarConfiguracoes(),
    simularFalha()
]

Promise.all(Promessas).then(dados =>{
    console.log(dados);
}).catch(erro => console.log(erro));

console.log("--- Teste com Falha (Esperando 1 segundo) ---");
Promise.all(PromessasComFalhas).then(dados => {
    console.log("Isso não deveria aparecer se houver falha:", dados);
}).catch(erro => {
    console.error("Erro capturado por Promise.all:", erro.message); // Imprima a mensagem do erro
});