import { Sequelize, Model } from "sequelize";
import bcrypt from "bcryptjs";

/**
 * Modelo de Usuário - Define a estrutura de dados e validações para usuários
 *
 * Atributos:
 * - nome: Nome do usuário (obrigatório, 3-255 caracteres)
 * - email: Email único do usuário (obrigatório, deve ser válido)
 * - password_hash: Hash da senha armazenado no banco de dados
 * - password: Senha em texto plano para validação (6-50 caracteres, padrão forte obrigatório)
 */
export default class User extends Model {
  /**
   * Inicializa o modelo de Usuário com suas colunas e validações
   *
   * @param {Sequelize} sequelize - Instância da conexão Sequelize
   * @returns {User} Retorna a classe User configurada
   */
  static init(sequelize) {
    super.init(
      {
        // Campo: Nome do usuário
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "O Nome deve ter entre 3 e 255 caracteres",
            },
          },
        },

        // Campo: Email do usuário (deve ser um email válido)
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "Email já existe",
          },
          validate: {
            isEmail: { msg: "Email inválido" },
            notEmpty: { msg: "Email é obrigatório" },
          },
        },

        // Campo: Hash da senha (armazenado no banco de dados)
        password_hash: Sequelize.STRING,

        // Campo: Senha em texto plano (validada antes de ser hashada)
        password: {
          type: Sequelize.VIRTUAL,
          validate: {
            // Valida o comprimento da senha
            len: {
              args: [6, 50],
              msg: "A Senha deve ter entre 6 e 50 caracteres",
            },
            // Valida a força da senha (requer maiúscula, minúscula, número e caractere especial)
            isStrong(value) {
              const strongRegex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
              if (!strongRegex.test(value)) {
                throw new Error(
                  "Senha deve conter maiúscula, minúscula, números e caractere especial"
                );
              }
            },
          },
        },
      },
      {
        sequelize,
      }
    );
    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password_hash = await bcrypt.hash(user.password, salt);
      }
    });
    return this;
  }
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}
