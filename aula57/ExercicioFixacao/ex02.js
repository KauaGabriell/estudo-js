function criaRobo(nome){
    let bateria = 100;
    return{
        nome,

        limpar(){
            if(bateria < 10){
                console.log('Bateria insuficiente');
            }else{
                bateria -= 10;
            }
        },

        carregar(){
            bateria = 100;
        },

        verBateria(){
            return bateria;
        }
    }
}

const Blitz = criaRobo('Blitzcrank');
Blitz.limpar();
console.log(Blitz.verBateria());
Blitz.carregar();
console.log(Blitz.verBateria());