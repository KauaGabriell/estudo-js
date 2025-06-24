const containerParagrafos = document.querySelectorAll('.containerParagrafos');
const paragrafos = document.querySelectorAll('p');

//Selecionando estilos
const estilosBody = getComputedStyle(document.body);
const backgroundBody = estilosBody.backgroundColor;

for (let p of paragrafos){
    p.style.backgroundColor = backgroundBody;
    p.style.color = 'white';
}
