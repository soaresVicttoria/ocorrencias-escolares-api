import { Controller, HttpRequest } from "../interfaces/index.interface";
import { Request, Response } from "express";

export default (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      params: req.params,
      body: req.body,
    };
    try {
      const httpResponse = await controller.handle(httpRequest);
      res.status(httpResponse.status).json(httpResponse.body);
    } catch (error: any) {
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  };
};
