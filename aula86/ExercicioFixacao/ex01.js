/**Função para randomizar um número */
function rand(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function forjarEspada(){
    return new Promise((resolve, reject) => {
       setTimeout(() =>{
        let resultado = rand(0, 100) / 100;
        if(resultado > 0.3){
            resolve({
                nome: 'Lâmina do Trovão',
                dano:100
            })
        }else{
            reject('A forja superaqueceu e a lâmina se quebrou.');
        }
        }, 2000);
    });
}

console.log('Iniciando Forja');
forjarEspada().then(espada => {
    console.log('Forja conclúida com sucesso...');
    console.log(espada);
}).catch(erro => {
    console.error('Falha na forja');
    console.log(erro);
})
