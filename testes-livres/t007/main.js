/**Função para criar cena */
function criaCena(descricao, opcoes = []) {
  return {
    descricao,
    opcoes,
  };
}

/**Criando Cena Utilizando a Função */
const cenaInicial = criaCena(
  'Você chega a uma ponte de cordas velha e gasta, balançando perigosamente sobre um abismo profundo e sem fundo aparente. O vento uiva, sacudindo a ponte com força. É a única forma de atravessar para o outro lado.',
  [
    { texto: 'Atravessar a ponte com cuidado.', proximaCena: 'cenaPonte' },
    {
      texto: 'Procurar outro caminho pela borda do abismo.',
      proximaCena: 'cenaSeguro',
    },
  ],
);

const cenaPonte = criaCena(
  'Você está na metade do caminho. O vento sopra mais forte e a ponte balança violentamente. Com um estalo alto, a tábua de madeira sob seu pé direito se parte! Você age rápido e se joga para frente, conseguindo se segurar em uma parte mais firme, mas sua mochila escorrega pelas suas costas e fica pendurada por uma única alça, prestes a cair no abismo.',
  [
    {
      texto: 'Tentar pegar a mochila antes que ela caia.',
      proximaCena: 'cenaPegaMochila',
    },
    {
      texto: 'Deixar a mochila cair e seguir em frente rapidamente.',
      proximaCena: 'cenaDeixaMochila',
    },
  ],
);

const cenaSeguro = criaCena(
  'Você desiste da ponte e segue pela borda do abismo, procurando uma passagem mais segura. Cerca de vinte minutos depois, a trilha te leva a uma pequena clareira. No centro dela, há uma única estátua de pedra cinzenta, coberta de musgo. A estátua representa um cavaleiro apontando para a sua direita, em direção a uma parte bem mais estreita do abismo.',
  [
    {
      texto: 'Confiar na estátua e seguir para onde ela aponta.',
      proximaCena: 'cenaSegueEstatua',
    },
    {
      texto: 'Examinar a base da estátua procurando por pistas.',
      proximaCena: 'cenaExaminaEstatua',
    },
  ],
);

const cenaSegueEstatua = criaCena(
  'Confiando no cavaleiro de pedra, você segue pela trilha indicada. Logo à frente, você encontra uma ponte natural de rocha, sólida e larga, que cruza o abismo facilmente. Do outro lado, uma estrada de terra batida desce a montanha em direção a um vilarejo no vale. Você está em segurança. Fim.',
  [], // Um array vazio significa que a história neste caminho terminou.
);

const cenaExaminaEstatua = criaCena(
  'Você limpa o musgo na base da estátua e revela uma pequena inscrição: "A fé é a sua ponte". Você entende a dica. Olhando para onde o cavaleiro aponta, você segue o caminho e encontra uma ponte natural de rocha sólida para o outro lado, sentindo-se mais sábio pela sua cautela. Você está em segurança. Fim.',
  [], // Um array vazio significa que a história neste caminho terminou.
);

const cenaPegaMochila = criaCena(
  'Num movimento rápido e arriscado, você se inclina sobre o abismo e agarra a alça da mochila. Por um segundo, seu corpo balança perigosamente, mas você consegue se firmar e puxar a mochila para as costas. Com o coração acelerado, você corre o resto do caminho e pisa em terra firme. Você está a salvo, e seus pertences também. Fim.',
  [], // Um array vazio significa que a história neste caminho terminou.
);

const cenaDeixaMochila = criaCena(
  'Você toma a decisão difícil de abandonar seus pertences. A mochila despenca no escuro do abismo. Mais leve e focado apenas em sobreviver, você consegue atravessar o resto da ponte com mais agilidade. Você chega ao outro lado, ofegante e exausto, mas vivo. A jornada adiante será mais dura, mas você sobreviveu. Fim.',
  [], // Um array vazio significa que a história neste caminho terminou.
);
/**Jogo */
const Jogo = (function () {
  let estadoAtual = 'cenaInicial';
  const cenas = {
    cenaInicial: cenaInicial,
    cenaPonte: cenaPonte,
    cenaSeguro: cenaSeguro,
    cenaSegueEstatua: cenaSegueEstatua,
    cenaExaminaEstatua: cenaExaminaEstatua,
    cenaPegaMochila: cenaPegaMochila,
    cenaDeixaMochila: cenaDeixaMochila,
  };

  /**Selecionando Elementos */
  const textoCena = document.querySelector('#texto-cena');
  const botoes = document.querySelector('.botoes');

  /**Evitar repetição de Código */
  function renderizarCena() {
    /**Exibindo Descrição da Cena*/
    textoCena.innerText = cenas[estadoAtual].descricao;

    //Limpando Botões
    botoes.innerHTML = '';

    /**Criando Botões */
    for (let opcao of cenas[estadoAtual].opcoes) {
      const botao = document.createElement('button');
      botao.innerText = opcao.texto;
      botao.dataset.proximaCena = opcao.proximaCena;
      botoes.appendChild(botao);
    }
  }

  function avancarPara(idCena) {
    if (idCena) {
      estadoAtual = idCena;
      renderizarCena();
    } else {
      alert('Jogo Finalizado!!');
    }
  }

  return {
    iniciar: function () {
      renderizarCena();
      /**Capturar Escolha do usuário */
      botoes.addEventListener('click', (e) => {
        const el = e.target;
        if (el.tagName === 'BUTTON') {
          const proxima = el.dataset.proximaCena;
          avancarPara(proxima);
        }
      });
    },
  };
})();

Jogo.iniciar();
