import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.js";
import Responsavel from "../../models/model-responsavel.js";

export class ListarResponsavelController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params;

    try {
      const responsavel = await Responsavel.findByPk(id);
      if (!responsavel) {
        return {
          statusCode: 404,
          body: { error: "Responsável não encontrado" },
        };
      }

      return {
        statusCode: 200,
        body: responsavel,
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}
