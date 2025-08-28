import express from "express";
import setupMiddlewares from "./middleware.setup";
import setupRoutes from "./route.setup";

export const server = express();

setupMiddlewares(server);
setupRoutes(server);
