import { Model, DataTypes } from "sequelize";
import { sequelize } from "../configs/database.config";

export class ResponsibleModel extends Model {
  declare id: number;
  declare name: string;
  declare phoneNumber: string;
}

ResponsibleModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "responsible",
    timestamps: true,
  }
);
