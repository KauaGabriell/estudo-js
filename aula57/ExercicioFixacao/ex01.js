function criaPersonagem(nome, raca, classe){
    return{
        nome, 
        raca,
        classe
    }
}

const Dante = criaPersonagem('Dante', 'Humano', 'Ocultista');
console.log(Dante);