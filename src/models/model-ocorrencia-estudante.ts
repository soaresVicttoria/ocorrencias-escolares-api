import { Model, DataTypes } from "sequelize";
import sequelize from "../database.js";
import Ocorrencia from "./model-ocorrencia.js";
import Estudante from "./model-estudante.js";

class OcorrenciaEstudante extends Model {
  ocorrenciaId!: number;
  estudanteId!: number;
}

OcorrenciaEstudante.init(
  {
    ocorrenciaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Ocorrencia,
        key: "id",
      },
    },
    estudanteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Estudante,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "OcorrenciaEstudante",
    tableName: "ocorrencia_estudante",
  }
);

export default OcorrenciaEstudante;
