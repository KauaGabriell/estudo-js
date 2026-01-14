import User from "../models/User.js";

/**
 * Controller responsável pelo gerenciamento de Usuários.
 * Segue o padrão RESTful (Store, Index, Show, Update, Delete).
 */
class UserController {
  /**
   * Cria um novo usuário.
   * * @param {import('express').Request} req - Objeto de requisição
   * @param {import('express').Response} res - Objeto de resposta
   */
  async createUser(req, res) {
    try {
      const novoUser = await User.create(req.body);
      
      return res.status(201).json(novoUser);
    } catch (e) {
      // Tratamento específico de erros do Sequelize
      if (e.name === "SequelizeValidationError") {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
      
      if (e.name === "SequelizeUniqueConstraintError") {
        return res.status(400).json({
          errors: ["Email já existe"], // Mensagem amigável para o front
        });
      }

      // Logar o erro real no servidor para debug (nunca retornar stack trace pro user)
      console.error("Critical Error on Create:", e);
      return res.status(500).json({
        errors: ["Erro interno do servidor"],
      });
    }
  }

  /**
   * Lista todos os usuários (apenas dados públicos).
   */
  async index(req, res) {
    try {
      // PERFORMANCE: Projection (attributes) evita vazamento de password_hash
      const users = await User.findAll({
        attributes: ["id", "nome", "email"],
        order: [['id', 'DESC']] // Boa prática: Ordenação padrão
      });
      return res.json(users);
    } catch (error) {
      console.error("Erro ao listar usuários:", error);
      return res.status(500).json({
        errors: ["Erro Interno ao buscar usuários"],
      });
    }
  }

  /**
   * Exibe um usuário específico pelo ID.
   */
  async show(req, res) {
    try {
      const { id } = req.params;
      
      // Busca otimizada por Primary Key com filtro de campos
      const user = await User.findByPk(id, {
        attributes: ["id", "nome", "email"],
      });

      if (!user) {
        return res.status(404).json({ errors: ["Usuário não encontrado!"] });
      }

      return res.status(200).json(user);
    } catch (e) {
      //Se o erro não for do Sequelize (ex: Banco caiu), e.errors será undefined
      // e causará um crash na aplicação.
      return res.status(400).json({ 
        errors: e.errors ? e.errors.map((err) => err.message) : ['Erro desconhecido'] 
      });
    }
  }

  /**
   * Atualiza dados de um usuário.
   */
  async update(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ errors: ["Usuário não encontrado"] });
      }

      // Atualiza a instância e retorna os dados novos automaticamente
      const userAtualizado = await user.update(req.body);
      
      const { id: novoId, nome, email } = userAtualizado;
      return res.json({ id: novoId, nome, email });
    } catch (e) {
      return res.status(400).json({ 
        errors: e.errors ? e.errors.map((err) => err.message) : ['Erro na atualização'] 
      });
    }
  }

  /**
   * Remove um usuário do sistema.
   */
  async delete(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ errors: ["Usuário não encontrado"] });
      }

      // método da instância (user.destroy) ao invés da classe (User.destroy).
      // Isso garante consistência com o objeto já carregado na memória.
      await user.destroy();
      
      return res.json({
        msg: "Usuário deletado com sucesso",
        id, // Retorna o ID para facilitar a remoção no Front-end
      });
    } catch (e) {
      return res.status(400).json({ 
        errors: e.errors ? e.errors.map((err) => err.message) : ['Erro ao deletar'] 
      });
    }
  }
}

export default new UserController();