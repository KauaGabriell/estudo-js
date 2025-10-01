const fs = require('fs').promises
const { dir } = require('console')
const path = require('path')

async function mapearDiretorio(diretorio){
    try {
        const items = await fs.readdir(diretorio)
        
    
        for(const item of items){
            const caminhoCompleto = path.join(diretorio, item)
            const stats = await fs.stat(caminhoCompleto)
            
            if(stats.isDirectory()){
                await mapearDiretorio(caminhoCompleto);
            }else{
                console.log(`Arquivo Encontrado: ${caminhoCompleto}`)
            }
        }
    } catch (error) {
        console.log(error.message)
    }
}

mapearDiretorio(__dirname)