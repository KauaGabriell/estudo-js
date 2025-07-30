function criaLivro(titulo, autor, totalPaginas){
    let paginaAtual = 1;
    return{
        titulo,
        autor,

        get pagina(){
            return paginaAtual;
        },

        set pagina(valor){
            if(valor > 1 && valor <= totalPaginas){
                paginaAtual =  valor;
            }else{
                console.log('Contagem de páginas errada, tente novamente!!')
            }
        }
    }
}

const HarryPotter = criaLivro('Harry Potter', 'JK HOWLING', 900);
HarryPotter.pagina = 950;
console.log(HarryPotter.pagina);