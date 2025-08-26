function Usuario(email) {
  this.email = email;
}

Usuario.prototype.login = function () {
  console.log(`O usuário ${this.email} está fazendo login`);
};

const user1 = new Usuario('peixe@gmail.com');

function Admin(email, cargo) {
  Usuario.call(this, email);
  this.cargo = cargo;
}
Admin.prototype = Object.create(Usuario.prototype); //Passando a Herança de Usuário para Admin, porém quando fazemos isso o nosso construtor de admin se torna o construtor Pai
Admin.prototype.constructor = Admin; //Se torna o constructor certo
Admin.prototype.deletarPost = function(){
    console.log(`O ${this.cargo} está deletando Post agora!!`);
}

const adm = new Admin('ceo@gmail.com', 'CEO');

/**Testes */
user1.login();
adm.login();
adm.deletarPost();

