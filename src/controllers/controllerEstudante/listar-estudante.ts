import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.js";
import Estudante from "../../models/model-estudante.js";

export class ListarEstudanteController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params;

    try {
      const estudante = await Estudante.findByPk(id);
      if (!estudante) {
        return {
          statusCode: 404,
          body: { error: "Responsável não encontrado" },
        };
      }

      return {
        statusCode: 200,
        body: estudante,
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}
