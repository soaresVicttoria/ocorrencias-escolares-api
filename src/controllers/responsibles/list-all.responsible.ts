import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.interface";
import { ResponsibleModel } from "../../models/responsible.model";

export class ListResponsiblesController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const responsibles = await ResponsibleModel.findAll();

      if (responsibles.length === 0) {
        return {
          statusCode: 404,
          body: { error: "Os responsáveis não foram encontrados" },
        };
      }

      return {
        statusCode: 200,
        body: { responsibles },
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}
