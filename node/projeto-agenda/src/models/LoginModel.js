const mongoose = require('mongoose');
const validator = require('validator');
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

    //Verifica se existe um erro
    if (this.errors.length > 0) return;

    //Criando o Usuário na base de dados
    try {
      const user = await loginModel.create(this.body);
    } catch (error) {
      console.log(error);
    }
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
}

module.exports = Login;
