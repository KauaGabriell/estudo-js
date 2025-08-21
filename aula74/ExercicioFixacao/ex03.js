const prototipoGolem = {
    ativar() {
      console.log("Golem ativado! Núcleo brilhando...");
    }
  };

  const golem = Object.create(prototipoGolem, {
        material: {
            value: 'Ferro',
            enumerable: true,
        },

        forca: {
            value: 10,
            enumerable: true,
        },
  })

golem.ativar(); 

console.log(golem.material); 

console.log(golem.forca); 

console.log(Object.keys(golem)); 