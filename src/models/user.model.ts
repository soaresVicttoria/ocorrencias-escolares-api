import { Model, DataTypes } from "sequelize";
import { sequelize } from "../setups/database.setup";
import { Role } from "../enums/role.enum";

export class UserModel extends Model {
  declare id: number;
  declare name: string;
  declare cpf: string;
  declare role: Role;
  declare password: string;
}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM("Diretor", "Coordenador", "Inspetor", "Professor"),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
  }
);
