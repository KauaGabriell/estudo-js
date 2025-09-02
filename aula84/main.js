/**Recriando o algoritmo de Validação de CPF com Classes */
class ValidaCPF{ //Criando C
    constructor(cpfEnviado){ //Passando CPF para o construtor
        Object.defineProperty(this, 'cpfLimpo', {
           value: cpfEnviado.replace(/\D+/g, '') //Limpamos o CPF retirando tudo o que não é número.
        });
    }
    
    sequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; //Verificamos se o CPF é uma sequência.
    }

    geraNovoCpf(){ //Método que gera o CPF novo
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2); //Pegando os 9 primeiros dígitos do CPF.
        const digito1 = this.geraDigito(cpfSemDigitos); //Chamada de função que gera o um dígito.
        const digito2 = this.geraDigito(cpfSemDigitos + digito1); //Chamada de função que gera o um dígito.
        this.cpfNovo = cpfSemDigitos + digito1 + digito2; //Cpf novo junto com os dois dígitos.
    }

    geraDigito(cpfSemDigitos){ //Método para gerar dígito
        let total = 0; //Variável total para acumular a soma.
        let reverso = cpfSemDigitos.length + 1; //Variável com o número de elementos do cpf sem digitos + 1(começar em 10 e ir decrescendo).
        
        for (let stringNumerica of cpfSemDigitos) { 
            total += reverso * Number(stringNumerica); //Percorremos a string fazendo com que a variável total assuma o valor de reverso * os números.(soma de todos os números)
            reverso--; //Descrementando 1 no contador.
        }

        const digito = 11 - (total % 11); //Cálculo do dígito.
        return digito <= 9 ? String(digito) : '0'; //Retornando dígito se ele for maior que 9, se não retorna ele como sendo zero.
    }

    valida(){
        if(!this.cpfLimpo) return false; //Verificando se o CPF LIMPO existe
        if(this.cpfLimpo.length !== 11) return false; //Verificando se o CPF possui 11 dígitos.
        if(this.sequencia()) return false; //Retornando falso se o CPF for uma sequência.
        this.geraNovoCpf();

        return this.cpfNovo === this.cpfLimpo;
    }
}

let validaMeuCpf = new ValidaCPF('03184359182');
console.log(validaMeuCpf.valida());

if(validaMeuCpf.valida()){
    console.log('CPF VÁLIDO');
}else{
    console.log('CPF Inválido');
}