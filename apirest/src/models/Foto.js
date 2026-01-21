import Sequelize, { Model } from "sequelize";
import appConfig from "../config/appConfig.js";

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: { msg: "Campo não pode ser vazio" },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: { msg: "Campo não pode ser vazio" },
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            const file = this.getDataValue("filename");
            
            // Se o arquivo já for uma URL (Cloudinary), retorna ele direto
            if (file && file.startsWith('http')) {
                return file;
            }

            // Caso contrário (retrocompatibilidade), monta a URL local
            return `${appConfig.url}/images/${file}`;
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: "aluno_id" });
  }
}