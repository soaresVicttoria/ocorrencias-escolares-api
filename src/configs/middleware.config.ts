import { Express } from "express";
import { bodyParser, cors, contentType } from "../middlewares/index.middleware";

export default (server: Express): void => {
  server.use(bodyParser);
  server.use(cors);
  server.use(contentType);
};
