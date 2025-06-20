import sequelize from "./database.js";
import { ENV } from "./config/env.js";
import "./models/index.js"
import { Express } from "express";

const startServer = async (port: number) => {
  const app = (await import("./config/app.js")).default;

  app
    .listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
      console.log(
        `Documentação da API disponível em http://localhost:${port}/api-doc`
      );
    })
    .on("error", (err: any) => {
      if (err.code !== "EADDRINUSE") {
        console.error(err);
      }
      console.log(`Porta ${port} está ocupada.`);
    });
};

sequelize
  .sync()
  .then(() => {
    console.log("Banco MySQL sincronizado");
    startServer(Number(ENV.PORT));
  })
  .catch((err: any) => {
    console.error("Erro ao sincronizar o banco de dados:", err);
  });
