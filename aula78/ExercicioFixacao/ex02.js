const prototipoRelatorio = {
    gerarCabecalho(){
        return '--- CABEÇALHO DO RELATÓRIO ---';
    },

    formatarData(){
        return '--- DATA ATUAL ---';
    }
};

function criaRelatorio(titulo, dados){
    const relatorio = Object.create(prototipoRelatorio, {
        gerarCompleto: {
            value: function(){
                const cabecalho = this.gerarCabecalho();
                const dataAtual = this.formatarData();

                return `
                ${this.titulo}
                ${cabecalho}
                ${dataAtual}
                ${this.dados}
                `
            }
        }
    });
    relatorio.titulo = titulo;
    relatorio.dados = dados;
    return relatorio
}
