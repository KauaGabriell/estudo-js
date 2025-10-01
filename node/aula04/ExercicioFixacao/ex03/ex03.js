const fs = require('fs').promises
const path = require('path');

async function encontrarTesouros(diretorio){
    try {
        let caminhos = [];
        const items = await fs.readdir(diretorio);
        
        
        for(let item of items){
            const caminhoCompleto = path.join(diretorio, item);
            const stats = await fs.stat(caminhoCompleto);

            if(stats.isDirectory()){
                const tesourosSubPasta = await encontrarTesouros(caminhoCompleto);
                caminhos = [...tesourosSubPasta];
            }else if(stats.isFile() && caminhoCompleto.endsWith('.treasure')){
                caminhos.push(caminhoCompleto);
            }
        }
        
        return caminhos;
        
    } catch (error) {
        console.log(error.message);
    }
}

encontrarTesouros(__dirname).then(tesouros => console.log(tesouros)).catch(e => console.log(e.message))
