const request = (obj) => {
  //
};

document.addEventListener('click', function (e) {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(elemento) {
  try {
    const href = elemento.getAttribute('href');
    const response = await fetch(href);

    if (response.status !== 200) throw new Error('ERROR');

    const html = await response.text();
    carregaResultado(html);
  } catch (error) {
    console.log(error);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}
