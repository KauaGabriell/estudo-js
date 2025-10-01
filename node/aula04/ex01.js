const fs = require('fs').promises
const path = require('path');

async function lerArquivo(arquivo) {
    try {
        const conteudo = await fs.readFile(arquivo, 'utf-8')
        console.log(conteudo)
    } catch (error) {
        console.log(error.message)
    }
    
}

lerArquivo('dados.txt')


