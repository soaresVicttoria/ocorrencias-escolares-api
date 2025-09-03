import { sequelize } from "./configs/database.config";
import { server } from "./configs/server.config";
// import "./models/associations.model";

const startServer = (port: number) => {
  server
    .listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    })
    .on("error", (err: any) => {
      if (err.code !== "EADDRINUSE") {
        console.log(err);
      }
      console.log(`A porta ${port} está ocupada!`);
    });
};

sequelize
  .sync()
  .then(() => {
    console.log("Conexão estabelecida com sucesso no Banco MySQL!");
    startServer(Number(3000));
  })
  .catch((err) => {
    console.log("Erro ao sincronizar com o banco de dados: ", err);
  });
