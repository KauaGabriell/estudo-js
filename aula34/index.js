/*Atribuição via desestruturação(Objetos)*/

const pessoa = {
    nome: 'Peixe',
    idade: 21,
    sexo: 'Masculino',
    endereco: {
        rua: '113',
        bairro: 'Vila Formosa',
    }
};

/**Primeiro utilizando apenas as propriedades de escopo geral */
const {nome} = pessoa;
console.log(nome);

/**Agora utilizando as propriedades de um objeto que está dentro do objeto principal */
const {endereco: {rua}} = pessoa;
console.log(rua);

/**Podemos usar apenas o objeto secundário ao invés de acessar um propriedade que está dentro dele */
const {endereco} = pessoa; //Mas quando fazemos a opção acima a variável "endereço" não é criada.
console.log(endereco);