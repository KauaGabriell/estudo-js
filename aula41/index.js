const pessoas = ["Peixe", "Lucas", "Mariana", "João", "Davi"];

//Continue, ele continua o loop na próxima instância nesse caso.
for (const pessoa of pessoas) {
  if (pessoa == "Lucas") {
    console.log(pessoa);
    continue;
  }
  console.log(pessoa)
}

//Break
for (const pessoa of pessoas) {
  if (pessoa == "Peixe") {
    console.log(pessoa);
    break;
  }
}
