import geraCPF from './modules/geraCPF';
import './assets/css/style.css';

(function(){
    const gera = new geraCPF();
    const cpfGerado = document.querySelector('.resultado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();