import express from "express";
import setupMiddlewares from "./middleware.config";
import setupRoutes from "./route.config";

export const server = express();

setupMiddlewares(server);
setupRoutes(server);
