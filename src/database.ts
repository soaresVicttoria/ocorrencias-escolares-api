import { Sequelize, Dialect } from "sequelize";
import config from "./config/config.json" with { type: "json" };

type ConfigKeys = "development";
const env = (process.env.NODE_ENV || "development") as ConfigKeys;
const databaseConfig = config[env];
const sequelize = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect as Dialect,
    port: databaseConfig.port,
    logging: false,
  }
);
export default sequelize;
