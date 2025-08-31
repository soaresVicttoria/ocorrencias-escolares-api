import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.interface";
import { ResponsibleModel } from "../../models/responsible.model";

export class GetResponsibleController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      const responsible = await ResponsibleModel.findByPk(id);

      if (!responsible) {
        return {
          statusCode: 404,
          body: { error: "Responsável não encontrados" },
        };
      }

      return {
        statusCode: 200,
        body: { responsible },
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}
