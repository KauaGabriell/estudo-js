const relogio = document.querySelector(".relogio");
let segundos = 0;
let timer;

//Função Para Iniciar o Relógio
function TimerStart() {
  timer = setInterval(() => {
    segundos++;
    relogio.innerHTML = getTimeFromSeconds(segundos);
  }, 1000);
}

//Função que formata os segundos no formato de hora.
function getTimeFromSeconds(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

document.addEventListener("click", function (event) {
  const elemento = event.target;
  if (elemento.classList.contains("zerar")) {
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    segundos = 0;
    relogio.classList.remove("pausado");
  }

  if (elemento.classList.contains("pausar")) {
    clearInterval(timer);
    relogio.classList.add("pausado");
  }

  if (elemento.classList.contains("iniciar")) {
    clearInterval(timer);
    TimerStart(segundos);
    relogio.classList.remove("pausado");
  }
});
