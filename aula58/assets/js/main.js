function CriaCalculadora(){
  return{
    display: document.querySelector('.display'),
    //Inicia Calculadora
    inicia(){
      this.cliqueBotoes();
    },
    
    //Método para deletar um número
    deleteNum(){
      this.display.value = this.display.value.slice(0, -1);
    },

    //Método para limpar display
    clearDisplay(){
      this.display.value = '';
    },

    //Método De Calcular
    realizaConta(){
      let conta = this.display.value;
      try{
        conta = eval(conta);
        if(!conta && conta !== 0){ 
          alert('Conta inválida');
          return;
        }
        this.display.value = String(conta);
      }catch(e){
        alert('Conta inválida');
        return;
      }
    },

    //Clique dos botões
    cliqueBotoes(){
      document.addEventListener('click', (e) => {
        const el = e.target;

        if(el.classList.contains('btn-num')){
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')){
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')){
          this.deleteNum();
        }

        if(el.classList.contains('btn-eq')){
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor){
      this.display.value += valor;
    }

  }
}

const calculadora = CriaCalculadora();
calculadora.inicia();