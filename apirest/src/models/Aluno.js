import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Nome deve conter entre 3 e 255 caracteres",
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Nome deve conter entre 3 e 255 caracteres",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "Esse email já está vinculado a outro aluno",
          },
          validate: {
            isEmail: {
              msg: "E-mail deve ser válido",
            },
            notEmpty: "E-mail não pode ser vazio",
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: null,
          validate: {
            isInt: "Idade precisa ser um número inteiro",
            notEmpty: "Idade não pode ser vazio",
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: null,
          validate: {
            isFloat:
              "Peso precisa ser um número inteiro ou de ponto flutuante(Casas Decimais)",
            notEmpty: "Peso não pode ser vazio",
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: null,
          validate: {
            isFloat:
              "Altura precisa ser um número inteiro ou de ponto flutuante(Casas Decimais)",
            notEmpty: "Altura não pode ser vazio",
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
