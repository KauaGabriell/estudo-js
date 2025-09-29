/**Função Randômica */
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

/**Gera Maíuscula */
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));


/**Gera Minúscula */
const geraMinuscula = () => String.fromCharCode(rand(97, 123));


/**Gera número */
const geraNúmero = () => String.fromCharCode(rand(48, 58));


/**String com os símbolos */
const simbolos = `!@#$%^&*()_+[]{}|;:,.<>/?\`~-=\\'"`;

/**Gera símbolo */
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];


/**Função que gera senha */

export default function gerarSenha(qtd, maiusculas, minusculas, numeros, simbolos){
    const senhaArray = [];

    for(let i = 0; i < qtd; i++){
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNúmero());
        simbolos && senhaArray.push(geraSimbolo());
    }
    return senhaArray.join('').slice(0, qtd);
}
