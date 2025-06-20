import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Ocorrências Escolares",
      version: "1.0.0",
      description: "Documentação da API usando Swagger",
    },
  },
  apis: ["./src/routes/**/*.ts"],
};

const specs = swaggerJSDoc(options);

export { specs, swaggerUi };
