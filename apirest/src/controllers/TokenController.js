import User from "../models/User.js";
import jwt from "jsonwebtoken";

/**
 * Controller responsável pela criação de tokens JWT para autenticação.
 *
 * Observações de design:
 * - Não expõe se o email existe por motivos de segurança (mensagem genérica).
 * - Valida entradas e garante tratamento consistente de erros.
 */
class TokenController {
  /**
   * Gera um token JWT a partir de `email` e `password` recebidos no body.
   * - Requisições sem `email`/`password` retornam 400.
   * - Credenciais inválidas retornam 401 (mensagem genérica).
   * - Erros internos retornam 500.
   */
  async createToken(req, res) {
    try {
      const { email, password } = req.body;

      // Validação mínima de entrada
      if (!email || !password) {
        return res
          .status(400)
          .json({ errors: ["Email e senha são obrigatórios"] });
      }

      const user = await User.findOne({ where: { email } });

      // Por segurança, resposta genérica quando email não existe ou senha está errada
      if (!user || !(await user.checkPassword(password))) {
        return res.status(401).json({ errors: ["Credenciais inválidas"] });
      }

      const { id } = user;

      // Verifica se a configuração do secret existe
      if (!process.env.TOKEN_SECRET) {
        return res
          .status(500)
          .json({ errors: ["Configuração de autenticação ausente"] });
      }

      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION || "1h",
      });

      return res.json({ token });
    // eslint-disable-next-line no-unused-vars
    } catch (e) {
      return res.status(500).json({ errors: ["Erro interno ao gerar token"] });
    }
  }
}

export default new TokenController();
