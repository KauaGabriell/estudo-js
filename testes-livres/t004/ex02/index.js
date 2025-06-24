let opcao;

do {
  opcao = prompt(
    `
        ### MENU ###
        1 - Ver perfil
        2 - Enviar mensagem
        3 - Ver amigos
        0 - Sair

        Digite sua opção:
    `
  );

  switch (opcao) {
    case "1":
      console.log("Vendo Perfil....");
      break;
    case "2":
      console.log("Enviando Mensagem...");
      break;
    case "3":
      console.log("Vendo amigos...");
      break;
    case "0":
      console.log("Saindo do sistema...");
      break;
    default:
      console.log("Comando inválido");
  }
} while (opcao !== "0");
