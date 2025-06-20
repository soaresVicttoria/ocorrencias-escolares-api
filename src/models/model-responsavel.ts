import { Model, DataTypes } from "sequelize";
import sequelize from "../database.js";

class Responsavel extends Model {
  id!: number;
  nome!: string;
  contato!: string;
}

Responsavel.init(
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
    contato: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Responsavel",
    tableName: "responsavel",
  }
);

export default Responsavel;
