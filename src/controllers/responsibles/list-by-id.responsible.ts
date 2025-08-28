import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.interface";
import { ResponsibleModel } from "../../models/responsible.model";

export class ListResponsibleController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      const responsible = await ResponsibleModel.findByPk(id);

      if (!responsible) {
        return {
          status: 404,
          body: { error: "Responsável não encontrados" },
        };
      }

      return {
        status: 200,
        body: responsible,
      };
    } catch (error: any) {
      return {
        status: 500,
        body: { error: error.message },
      };
    }
  }
}
