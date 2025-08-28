import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("db_app", "user_app", "Senha@123", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  logging: false,
});
