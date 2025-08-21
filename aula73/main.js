/**Prototypes */
/**Primeiramente aprendemos assim a manipulação de métodos em objetos */

function Pessoa(nome, sobrenome){
    this.nome = nome, 
    this.sobrenome = sobrenome;
    /*this.nomeCompleto = function(){
        return this.nome + ' ' + this.sobrenome
    };*/
}

const p1 = new Pessoa('Peixe', 'Ramos');

/**Porém dessa forma nós podemos consumir muito recurso, já que todo objeto que for criado toda instância de Pessoa irá criar também esse método */

/**Utilizando prototypes */
Pessoa.prototype.nomeCompleto = function(){
   return this.nome + ' ' + this.sobrenome;
};
console.log(p1.nomeCompleto());
/**Dessa forma conseguimos usar o prototype para todas as instancias dos objetos caso necessário. */