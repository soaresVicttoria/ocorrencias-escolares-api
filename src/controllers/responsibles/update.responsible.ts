import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.interface";
import { ResponsibleModel } from "../../models/responsible.model";

export class UpdateResponsibleController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      const responsible = await ResponsibleModel.findByPk(id);

      if (!responsible) {
        return {
          status: 404,
          body: { error: "Responsável não encontrado" },
        };
      }

      const { name, phoneNumber } = httpRequest.body;

      await responsible.update({
        name,
        phoneNumber,
      });

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
