import Aluno from "../models/Aluno.js";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Peixe",
      sobrenome: "Ramos",
      email: "peixe@gmail.com",
      idade: 21,
      peso: 300,
      altura: 1.85,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
