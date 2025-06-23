const pessoa = {
    nome: 'Peixe',
    idade: 21, 
    sexo: 'Masculino',
}

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}