const termostato = {
    _temperaturaCelsius: 20,

    get temperatura(){
        return this._temperaturaCelsius;
    },

    set temperatura(valor){
        if(!(valor > 0 && valor < 40)){
            console.log('Temperatura Fora da faixa Permitida!');
        }else{
            this._temperaturaCelsius = valor;
        }
    }
}

console.log(termostato.temperatura);
termostato.temperatura = 25;
console.log(termostato.temperatura);
termostato.temperatura = 50;
console.log(termostato.temperatura);