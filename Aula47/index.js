function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
    });
}
const inputUser = 3000;
console.log(mostraHora());

const timer = setInterval(() => {
    console.log(mostraHora());
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, inputUser);