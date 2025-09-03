import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.interface";
import { ClassModel } from "../../models/class.model";

export class GetClassController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      const foundClass = await ClassModel.findByPk(id);

      if (!foundClass) {
        return {
          statusCode: 404,
          body: { error: "Turma não encontrada" },
        };
      }

      return {
        statusCode: 200,
        body: { foundClass },
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}
