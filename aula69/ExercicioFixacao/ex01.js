/**Sua Missão: Use .forEach() no array notificacoes para imprimir cada notificação no console, mas formatada com um prefixo, como: [NOTIFICAÇÃO]: Você tem uma nova mensagem de Ana. */

const notificacoes = [
    "Você tem uma nova mensagem de Ana.",
    "ALERTA: Sua fatura vence amanhã.",
    "Bruno curtiu sua foto."
  ];

  const notification = notificacoes.forEach(Element => console.log(`[NOTIFICAÇÃO] - ${Element}`));
  