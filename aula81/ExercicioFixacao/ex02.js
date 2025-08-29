const _senha = Symbol('senha');
class Cofre{
    constructor(senha){
        this[_senha] = senha;
    };

    set senha(senhaPassada){
        if(senhaPassada.length < 8){
            console.log('Senha inválida');
            return;
        }else{
            this[_senha] = senhaPassada;
        }
    }

    verificarSenha(tentativa){
        if(tentativa == this[_senha]) return true;
    }
}

const meuCofre = new Cofre('senhaInicialForte');
meuCofre.senha = 'curta';
console.log(meuCofre.verificarSenha('senhaInicialForte'))