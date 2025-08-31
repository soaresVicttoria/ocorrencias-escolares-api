import { Express, Router } from "express";
import fg from "fast-glob";

export default (server: Express): void => {
  const router = Router();

  server.use("/api/v1", router);

  fg.sync("**/src/routes/*.route.ts").forEach(async (file) => {
    (await import(`../../${file}`)).default(router);
  });
};
