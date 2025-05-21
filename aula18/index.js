const arr = ['Peixe', 'Jão', 'Nelsin'];

arr.push('Otávio'); //Push adiciona um item ao final do array
arr.unshift('Cleiton'); //Unshift adiciona um item ao começo do array
console.log(arr);

arr.pop(); //Remove do final do array
arr.shift(); //Remove do começo do array
console.log(arr);

delete arr[2]; //Deletar um item e deixar o índice sem mexer
console.log(arr);

//Adicionando mais itens no array para exemplo
arr.push('Otávio');
arr.unshift('Cleiton'); 
console.log(arr);
//Podemos utilizar os métodos de string também para manipular arrays
console.log(arr.slice(0, 2));
