import { Model, DataTypes } from "sequelize";
import { sequelize } from "../configs/database.config";
import { Shifts } from "../enums/shifts.enum";
import { GradeLevels } from "../enums/grade-levels.enum";

export class ClassModel extends Model {
  declare id: number;
  declare className: string;
  declare gradeLevel: GradeLevels;
  declare shift: Shifts;
}

ClassModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    className: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gradeLevel: {
      type: DataTypes.ENUM("6º", "7º", "8º", "9º", "1º", "2º", "3º"),
      allowNull: false,
    },
    shift: {
      type: DataTypes.ENUM("Matutino", "Vespertino", "Noturno", "Integral"),
      allowNull: false,
    },
  },
  { sequelize, tableName: "class", timestamps: true }
);
