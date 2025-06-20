import { Request, Response } from "express";
import { Controller, HttpRequest } from "../interfaces/index.js";

export const routerAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      pathParameters: req.params,
      queryStringParameters: req.query,
    };
    try {
      const httpResponse = await controller.handle(httpRequest);
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
};
