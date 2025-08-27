const configuracoesPadroes = {
    tema: 'claro',
    idioma: 'pt-br',
    notificacoes: true,
}

const configuracoesUsuario = {
    tema: 'escuro',
    notificacoes: false,
}

Object.setPrototypeOf(configuracoesUsuario, configuracoesPadroes);
console.log(configuracoesUsuario.tema);        
console.log(configuracoesUsuario.notificacoes); 
console.log(configuracoesUsuario.idioma);


