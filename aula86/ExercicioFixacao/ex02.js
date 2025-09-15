const usuariosCadastrados = ['ana', 'bruno', 'carla', 'daniel'];

function verificarUsername(username) {
  return new Promise((resolve, reject) => {
    //Simulando tempo de rede
    setTimeout(() => {
      let usernamePronto = username.toLowerCase();
      if (!usuariosCadastrados.includes(usernamePronto)) {
        resolve('✅ Nome disponível');
      } else {
        reject('❌ Nome não disponível');
      }
    }, 1500);
  });
}

verificarUsername('peixe')
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((erro) => console.error(erro));

verificarUsername('ana')
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((erro) => console.error(erro));
