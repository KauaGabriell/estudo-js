class Arquivo {
  constructor(nome) {
    this.nome = nome;
  }

  getInfo() {
    return `Extraindo informações do arquivo ${this.nome}`;
  }

  static extrairExtensao(nomeDoArquivo) {
    let substring = nomeDoArquivo.lastIndexOf('.');
    return nomeDoArquivo.slice(substring + 1);
  }
}

// Testando o método estático (a ferramenta de utilidade)
const extensao1 = Arquivo.extrairExtensao('imagem_01.jpg');
console.log(extensao1); // Saída esperada: "jpg"

const extensao2 = Arquivo.extrairExtensao('planilha-de-vendas.xlsx');
console.log(extensao2); // Saída esperada: "xlsx"

// Testando o método de instância (o ficheiro específico)
const meuRelatorio = new Arquivo('relatorio_final.pdf');
console.log(meuRelatorio.getInfo()); // Saída esperada: "Nome: relatorio_final.pdf"
