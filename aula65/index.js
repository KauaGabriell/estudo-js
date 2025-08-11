/**Concatenação de Arrays */

const array01 = [1, 2, 3, 4, 5];
const array02 = [6, 7, 8, 9, 10];

/*Primeira forma ->> 'Concat'*/
const arrayConcatenado = array01.concat(array02);
console.log(arrayConcatenado);

/*Segunda forma ->> 'Spread'*/
const arrayConcatenadoSpread = [...array01, ...array02];
console.log(arrayConcatenadoSpread);