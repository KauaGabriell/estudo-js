// ===== EXEMPLOS DE DIFERENTES FORMAS DE IMPORTAR =====

// 1. Importar módulo completo como objeto
const mod01 = require('./mod01');
console.log('1. Módulo completo:', mod01);

// 2. Desestruturação (destructuring) - pegar partes específicas
const { Pessoa, teste } = require('./mod01');
console.log('2. Desestruturação:');
const p2 = new Pessoa('João', 'Silva');
console.log('Pessoa:', p2);
console.log('Teste:', teste);

// 3. Desestruturação com renomeação
const { Pessoa: ClassePessoa } = require('./mod01');
console.log('3. Com renomeação:');
const p3 = new ClassePessoa('Maria', 'Santos');
console.log('Pessoa:', p3);

// 4. Importar tudo e usar com alias
const meuModulo = require('./mod01');
console.log('4. Com alias:');
const p4 = new meuModulo.Pessoa('Pedro', 'Costa');
console.log('Pessoa:', p4);

// 5. Ver todas as propriedades disponíveis
console.log('5. Propriedades disponíveis:');
console.log(Object.keys(mod01));
