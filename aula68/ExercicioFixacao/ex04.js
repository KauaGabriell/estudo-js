const pessoas = [
    { nome: 'Ricardo', cidade: 'São Paulo' },
    { nome: 'Juliana', cidade: 'Rio de Janeiro' },
    { nome: 'Márcia', cidade: 'São Paulo' },
    { nome: 'Fernando', cidade: 'Belo Horizonte' },
    { nome: 'Letícia', cidade: 'Rio de Janeiro' },
    { nome: 'Gustavo', cidade: 'São Paulo' }
  ];


const novoObj = pessoas.reduce(function(acumulador, obj){
    if(acumulador[obj.cidade]){
        acumulador[obj.cidade].push(obj.nome);
    }else{
        acumulador[obj.cidade] = [obj.nome];
    }
    return acumulador;
}, {});

console.log(novoObj);