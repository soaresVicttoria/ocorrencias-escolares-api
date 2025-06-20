import express from "express";
import setupMiddlewares from "./middlewares.js";
import setupRoutes from "./routes.js";
import { specs, swaggerUi } from "./swagger.js";

const app = express();

app.get("/", (req, res) => {
  res.redirect("/api-doc");
});
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(specs));

setupMiddlewares(app)
setupRoutes(app)

export default app;