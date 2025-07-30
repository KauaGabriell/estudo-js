function Calculadora(){
  const display = document.querySelector('.display');

  //Iniciando Calculadora
  this.inicia = function(){
    this.cliqueBotoes();
  };

  //Deletar um Número
  this.deleteOne = function(){
    display.value = display.value.slice(0, -1);
  }

  //Limpando display
  this.LimparDisplay = function(){
    display.value = '';
  }

  //Realizando Conta
  this.realizarConta =  function(){
    let conta = display.value;
    try {
      conta = eval(conta);
      if(!conta && conta !== 0){
        console.log('Conta inválida!!');
        return;
      }
      display.value = String(conta);
    } catch (e) {
      console.log('Conta inválida!!')
      return;
    }
  };

  //Clique dos botões
  this.cliqueBotoes = function(){
    document.addEventListener('click', e =>{
      const el = e.target

      if(el.classList.contains('btn-num')){
        this.btnParaDisplay(el.innerText);
      }

      if(el.classList.contains('btn-clear')){
        this.LimparDisplay();
      }

      //Deletando números do display
      if(el.classList.contains('btn-del')){
        this.deleteOne();
      }

      if(el.classList.contains('btn-eq')){
        this.realizarConta();
      }
    })
  }
  //Mandando para display
  this.btnParaDisplay = function(valor){
    display.value += valor;
  }

}

const calculadora = new Calculadora();
calculadora.inicia();