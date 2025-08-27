const prototipoRobo = {
    ligar(){
        console.log('Ligando');
    },
    andar(){
        console.log('Andando');
    }
}

function criaRobo(nome, material){
    const obj = Object.create(prototipoRobo)
    obj.nome = nome;
    obj.material = material
    return obj;
}

const r1 = criaRobo('Peixe', 'Metal');
r1.ligar()