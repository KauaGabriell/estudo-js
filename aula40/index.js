//While
function getRandomArbitrary(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
  }
const min = 1;
const max = 50
let randomNumber = getRandomArbitrary(min, max);

while (randomNumber !== 11) {
    randomNumber = getRandomArbitrary(min, max)
    console.log(randomNumber);
};

//Do While (Executa pelo menos um vez e checa  a condição depois da execução)

do {
    console.log(randomNumber);
} while (randomNumber !== 11);