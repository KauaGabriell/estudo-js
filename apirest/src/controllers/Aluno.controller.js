import Aluno from "../models/Aluno.js";

/**
 * Controller responsável pelas operações CRUD de `Aluno`.
 * Segue boas práticas de clean code: validações explícitas,
 * retorno consistente de códigos HTTP e tratamento de erros.
 */
class AlunoController {
  /**
   * Lista todos os alunos (GET /alunos)
   */
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: [
        "id",
        "nome",
        "sobrenome",
        "email",
        "peso",
        "altura",
        "idade",
      ],
    });

    return res.json(alunos);
  }

  /**
   * Cria um novo aluno (POST /alunos)
   */
  async createAluno(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      const { id, nome, sobrenome, email, peso, altura, idade } = aluno;

      return res
        .status(201)
        .json({ id, nome, sobrenome, email, peso, altura, idade });
    } catch (e) {
      if (e && e.errors) {
        return res
          .status(400)
          .json({ errors: e.errors.map((err) => err.message) });
      }

      return res.status(500).json({ errors: ["Erro interno ao criar aluno"] });
    }
  }

  /**
   * Retorna um aluno pelo ID (GET /alunos/:id)
   */
  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ["ID não enviado"] });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(404).json({ errors: ["Aluno não encontrado"] });
      }

      const {
        id: alunoId,
        nome,
        sobrenome,
        email,
        peso,
        altura,
        idade,
      } = aluno;

      return res.json({
        id: alunoId,
        nome,
        sobrenome,
        email,
        peso,
        altura,
        idade,
      });
    } catch (e) {
      if (e && e.errors) {
        return res
          .status(400)
          .json({ errors: e.errors.map((err) => err.message) });
      }

      return res.status(500).json({ errors: ["Erro interno ao buscar aluno"] });
    }
  }

  /**
   * Atualiza um aluno pelo ID (PUT /alunos/:id)
   */
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ["ID não enviado"] });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(404).json({ errors: ["Aluno não encontrado"] });
      }

      const alunoEditado = await aluno.update(req.body);
      const {
        id: alunoId,
        nome,
        sobrenome,
        email,
        peso,
        altura,
        idade,
      } = alunoEditado;

      return res
        .status(200)
        .json({ id: alunoId, nome, sobrenome, email, peso, altura, idade });
    } catch (e) {
      if (e && e.errors) {
        return res
          .status(400)
          .json({ errors: e.errors.map((err) => err.message) });
      }

      return res
        .status(500)
        .json({ errors: ["Erro interno ao atualizar aluno"] });
    }
  }

  /**
   * Remove um aluno pelo ID (DELETE /alunos/:id)
   */
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ["ID não enviado"] });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(404).json({ errors: ["Aluno não encontrado"] });
      }

      await aluno.destroy();

      return res.status(200).json({ msg: "Usuário deletado com sucesso!" });
    } catch (e) {
      if (e && e.errors) {
        return res
          .status(400)
          .json({ errors: e.errors.map((err) => err.message) });
      }

      return res
        .status(500)
        .json({ errors: ["Erro interno ao deletar aluno"] });
    }
  }
}

export default new AlunoController();
