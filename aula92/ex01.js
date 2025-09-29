function buscarPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(dados => console.log(dados.name, dados.abilities, dados.types))
    .catch(erro => console.log(erro));
}

buscarPokemon('charizard')