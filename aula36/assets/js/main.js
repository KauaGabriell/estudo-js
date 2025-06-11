const elementos = [
    {tag: 'p', texto: 'Harry Potter'},
    {tag: 'div', texto: 'Sherlock Holmes'},
    {tag: 'section', texto: 'Hobbit'},
    {tag: 'footer', texto: 'As Crônicas de Nárnia'},
]
const container = document.querySelector('.container');
const div = document.createElement('div');


for(let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    console.log(tag);

    div.appendChild(tagCriada);
}
container.appendChild(div);



