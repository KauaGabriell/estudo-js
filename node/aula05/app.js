const fs =  require('fs').promises
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');

const escrever = require('./modules/escrever')
const ler = require('./modules/ler')



async function lerArquivo(caminho){
    const dados = await ler(caminho);
    renderizarDados(dados);
}

function renderizarDados(dados){
    const dadosObj = JSON.parse(dados)
    console.log(dadosObj)
}

lerArquivo(caminhoArquivo)


