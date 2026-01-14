import User from "../models/User.js";

class UserController {
  async createUser(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.status(201).json(novoUser);
    } catch (e) {
      // VALIDAÇÕES (isEmail, notEmpty, etc)
      if (e.name === "SequelizeValidationError") {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
      // UNIQUE (email duplicado)
      if (e.name === "SequelizeUniqueConstraintError") {
        return res.status(400).json({
          errors: e.errors.map(() => "Email já existe"),
        });
      }

      // fallback seguro
      return res.status(500).json({
        errors: ["Erro interno do servidor"],
      });
    }
  }
}

export default new UserController();
