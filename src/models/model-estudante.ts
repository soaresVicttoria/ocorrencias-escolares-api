import { Model, DataTypes } from "sequelize";
import sequelize from "../database.js";
import Responsavel from "./model-responsavel.js";

class Estudante extends Model {
  id!: number;
  nome!: string;
  responsavelId!: number;
}

Estudante.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    responsavelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Responsavel,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Estudante",
    tableName: "estudante",
  }
);

export default Estudante;
