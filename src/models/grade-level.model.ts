import { Model, DataTypes } from "sequelize";
import { sequelize } from "../configs/database.config";

export class GradeLevelModel extends Model {
  declare id: number;
  declare gradeLevel: string;
}

GradeLevelModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    gradeLevel: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { sequelize, tableName: "GRADE_LEVELS", timestamps: true }
);
