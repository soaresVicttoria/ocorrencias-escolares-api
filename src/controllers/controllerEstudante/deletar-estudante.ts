import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.js";
import Estudante from "../../models/model-estudante.js";

export class DeletarEstudanteController implements Controller {
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
      await estudante.destroy();

      return {
        statusCode: 204,
        body: {},
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}
