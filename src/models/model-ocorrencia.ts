import { Model, DataTypes } from "sequelize";
import sequelize from "../database.js";

class Ocorrencia extends Model {
  id!: number;
  descricao!: string;
  data!: string;
}

Ocorrencia.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Ocorrencia",
    tableName: "ocorrencia",
  }
);

export default Ocorrencia;
