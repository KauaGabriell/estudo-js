
/**Crie um objeto vazio chamado config. Ele vai guardar as configurações de um aplicativo.

Use Object.defineProperties para adicionar as seguintes propriedades e regras a ele de uma só vez:

nomeApp: Deve ter o valor 'Meu Aplicativo'. Outras partes do código precisam ser capazes de ver e alterar este nome, mas a propriedade em si não pode ser deletada.

versao: Deve ter o valor '1.0.0'. A versão deve ser visível, mas é uma informação crítica que não pode ser alterada nem deletada.

chaveAPI: Deve ter o valor 'XYZ-SECRET-KEY'. Esta é uma informação secreta. Ela não pode ser alterada e, o mais importante, não deve ser visível quando listarmos as propriedades do objeto (com Object.keys, por exemplo).

O Teste: Depois de configurar o objeto, tente quebrar as regras:

Tente mudar o nomeApp. Deve funcionar.

Tente deletar o nomeApp. Não deve funcionar.

Tente mudar a versao. Não deve funcionar.

Use console.log(Object.keys(config)) e verifique se a chaveAPI está escondida. */
 
const config = {};

Object.defineProperties(config, {
    nomeApp: {
        value: 'Meu Aplicativo',
        writable: true,
        enumerable: true,
        configurable: false,
    },

    versao: {
        value: '1.0.0',
        enumerable: true,
        writable: false,
        configurable: false,
    },

    chaveAPI: {
        value: 'XYZ-SECRET-KEY',
        writable: false,
        enumerable: false,
    }
})

/**Mudando nome do app */
console.log(config.nomeApp = 'FTT');
delete config.nomeApp;
console.log(config.nomeApp)

//Tentando alterar a Versão
config.versao = 2.0;
console.log(config.versao)

/**Verificando se a chaveDaApi ta escondida */
console.log(Object.keys(config));
