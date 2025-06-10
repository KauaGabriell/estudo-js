const container = document.querySelector("#container");
const data = new Date();

function getWeeklyDay(diaSemana) {
  let diaSemanaTexto;
  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = "Segunda-Feira";
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = "Terça-Feira";
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = "Quarta-Feira";
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = "Quinta-Feira";
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = "Sexta-Feira";
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = "Sábado";
      return diaSemanaTexto;
    default:
      diaSemanaTexto = "Inválido";
      return diaSemanaTexto;
  }
}

function getMonth(numeroMes) {
  let nomeMes;
  switch (numeroMes) {
    case 0:
      nomeMes = "Janeiro";
      return nomeMes;
    case 1:
      nomeMes = "Fevereiro";
      return nomeMes;
    case 2:
      nomeMes = "Março";
      return nomeMes;
    case 3:
      nomeMes = "Abril";
      return nomeMes;
    case 4:
      nomeMes = "Maio";
      return nomeMes;
    case 5:
      nomeMes = "Junho";
      return nomeMes;
    case 6:
      nomeMes = "Julho";
      return nomeMes;
    case 7:
      nomeMes = "Agosto";
      return nomeMes;
    case 8:
      nomeMes = "Outubro";
      return nomeMes;
    case 9:
      nomeMes = "Novembro";
      return nomeMes;
    case 10:
      nomeMes = "Dezembro";
      return nomeMes;
  }
}
container.innerHTML = `${getWeeklyDay(data.getDay())}`;
