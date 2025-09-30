const path = require('path')
//Traz a extensão do arquivo
console.log(path.extname(__filename))

//Traz um objeto com várias informações sobre o arquivo(incluindo extensão o que pode ser bem útil)
console.log(path.parse(__filename))

//Traz um 'resolve' de caminhos.
console.log(path.resolve('/folders', '//folders2'))
console.log(path.resolve('/folders', 'folders2')) //Aqui como não passmos para folders2 uma barra indicando que seria um caminho próprio ele exibe as duas pastas.
