class ValidaForm {
  constructor() {
    // Selecionando formulário
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener('submit', (event) => {
      this.handleSubmit(event);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.validaSenha();

    if (camposValidos && senhasValidas) {
      alert('Foi enviado!!');
      this.formulario.submit();
    }
  }

  // ========================================
  // VALIDAÇÃO DOS CAMPOS DO FORMULÁRIO
  // ========================================
  camposSaoValidos() {
    let valid = true;

    // Removendo os erros ao enviar o form
    for (let error of this.formulario.querySelectorAll('.error-text')) {
      error.remove();
    }

    for (let campo of this.formulario.querySelectorAll('.validar')) {
      // Pegando o label anterior aos inputs (campos)
      const label = campo.previousElementSibling.innerText;

      if (!campo.value) {
        this.criaErro(campo, `O ${label} não pode estar em branco.`);
        valid = false;
      }

      // Verificando CPF
      if (campo.classList.add('.cpf')) {
        if (!this.validaCPF()) valid = false;
      }

      // Verificando usuário
      if (campo.classList.contains('usuario')) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }

    return valid;
  }

  // ========================================
  // VALIDAÇÃO DE CPF
  // ========================================
  validaCPF(campo) {
    const cpf = new this.validaCPF(campo.value);

    if (!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido');
      return false;
    }
    return true;
  }

  // ========================================
  // VALIDAÇÃO DE USUÁRIO
  // ========================================
  validaUsuario(campo) {
    const regex = /^[a-zA-Z0-9]+$/;
    const usuario = campo.value;

    // Garantindo que o campo não possa ter caracteres especiais
    if (!regex.test(usuario)) {
      this.criaErro(campo, `O usuário só pode ter números e/ou letras!`);
      return false;
    }

    // Verificando tamanho do usuário passado
    if (!(usuario.length >= 3 && usuario.length <= 12)) {
      this.criaErro(campo, `O usuário deve ter entre 3 e 12 letras.`);
      return false;
    }
    return true;
  }

  // ========================================
  // VALIDAÇÃO DE SENHA
  // ========================================
  validaSenha() {
    let valid = true;

    // Pegando senhas
    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    // Verificando se senhas são iguais
    if (senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, `As senhas devem ser iguais`);
      this.criaErro(repetirSenha, `As senhas devem ser iguais`);
    }

    // Verificando a quantidade de caracteres
    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, `A senha deve ter entre 6 e 12 caracteres!`);
    }
    return valid;
  }

  // ========================================
  // MÉTODO AUXILIAR - CRIAÇÃO DE ERROS
  // ========================================
  criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }
}

// Instanciando a classe de validação
const valida = new ValidaForm();
