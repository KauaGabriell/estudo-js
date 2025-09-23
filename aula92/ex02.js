async function buscarCep(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        if(!response.ok){
            throw new Error(`Erro HTTP: ${response.status} - ${response.statusText || 'Erro desconhecido'}`);
        }

        const dados = await response.json();

        if(dados.erro === true) throw new Error('CEP Inválido ou não encontrado.');
        console.log(dados.logradouro, dados.bairro, dados.localidade, dados.uf);
        
    } catch (error) {
        console.log(error.message);
    }
}

buscarCep('75100570');