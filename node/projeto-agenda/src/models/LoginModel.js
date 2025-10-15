const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const loginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const loginModel = mongoose.model('login', loginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  /*-----Registra um usuário----- */
  async register() {
    this.valida();
    //Verifica se o usuário existe
    await this.userExist();

    //Verifica se existe um erro
    if (this.errors.length > 0) return;

    //Adicionando Hash
    const salt = bcrypt.genSaltSync();
    this.body.password = bcrypt.hashSync(this.body.password, salt);

    //Criando o Usuário na base de dados
    
      const user = await loginModel.create(this.body);
  }

  /*-----Valida os Dados dos campos----- */
  valida() {
    this.cleanUp();
    

    //Valida o email usando validator package
    if (!validator.isEmail(this.body.email))
      this.errors.push('Email deve ser válido!');

    //Valida a quantidade de caracteres da senha
    if (!this.body.password) this.errors.push('Senha é obrigatória!');
    else if (this.body.password.length < 3 || this.body.password.length > 20)
      this.errors.push('Senha deve ter entre 3 a 20 caracteres');
  }

  /*-----Valida se os dados passados são String----- */
  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    /*Garante que o body tenha apenas email e senha (Remove o CSURF TOKEN) */
    this.body = {
      email: this.body.email,
      password: this.body.password,
    };
  }

  async userExist(){
    const user = await loginModel.findOne({email: this.body.email});
    if(user){
      this.errors.push('Esse usuário já existe');
    }
  }
}

module.exports = Login;
