function FizzBuzz (num){
    if(typeof num !== 'number') return num;
    if(num % 3 == 0 && num % 5 == 0) return 'FizzBuzz';
    if(num % 3 == 0) return 'Fizz';
    if(num % 5 == 0) return 'Buzz';
    return num;
}

for (let index = 0; index < 100; index++) {
    console.log(index, FizzBuzz(index));
}