const meuBaralho = ['Ás ♠', 'Rei ♥', 'Dama ♦', 'Valete ♣'];

function* leitorDeBaralho(baralho){
    for (let carta of baralho) {
        yield carta;
    }
}

const baralhoLido = leitorDeBaralho(meuBaralho);
for (const  carta of baralhoLido) {
    console.log(carta);
}

