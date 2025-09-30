// Importando o módulo todo como um objeto
const mod01 = require('./mod01');
console.log('Módulo completo:', mod01);

// Acessando elementos específicos
const p1 = new mod01.Pessoa('Peixe', 'Lindo');
console.log('Pessoa criada:', p1);
console.log('Teste:', mod01.teste);
