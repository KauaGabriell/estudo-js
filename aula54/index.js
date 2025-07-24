function retornaFuncao(nome) {
    // 1. "Cidade Natal" da função anônima abaixo.
    // A variável 'nome' existe aqui.
    
    return function() {
      // 2. Esta é a nossa função "viajante".
      // Antes de ser retornada, ela arruma sua "mochila" (o Closure).
      // Dentro da mochila, ela guarda uma referência para a variável 'nome'.
      return nome; 
    };
  }
  
  // 3. Estamos chamando a função "mãe". Ela cria e retorna nossa "viajante".
  const funcao1 = retornaFuncao('Luiz'); 
  const funcao2 = retornaFuncao('João');
  
  // A função retornaFuncao() já terminou sua execução. A "cidade natal" já foi "desmontada".
  // MAS... a 'funcao1' agora existe e carrega sua mochila com 'Luiz' dentro.
  // E a 'funcao2' carrega sua própria mochila com 'João' dentro.
  
  // 4. Agora, em um lugar totalmente diferente do código, chamamos a viajante.
  // Ela abre a mochila para pegar a variável 'nome'.
  console.log(funcao1()); // Saída: Luiz
  console.log(funcao2()); // Saída: João

/**1. Privacidade: Proteger variáveis.
2. Reutilização: Criar funções fábrica.
3. Assincronismo: Garantir que callbacks usem os dados certos. */