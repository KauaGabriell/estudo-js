async function buscarCotacao(acao) {
  try {
    const response = await fetch(`https://brapi.dev/api/quote/${acao}`);
    if(!response.ok){
        throw new Error(`Erro HTTP: ${response.status} - ${(await response).statusText}`)
    }

    const data = await response.json();
    console.log(data);



  } catch (error) {
    
  }
}
buscarCotacao('BBAS3');
