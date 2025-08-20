const cofre = {
    tipo: 'digital',

};

Object.defineProperty(cofre, 'segredo', {
    value: 12345,
    writable: false, 
    enumerable: false,
})

cofre.segredo = 4444;
console.log(cofre.segredo);
console.log(Object.keys(cofre));
