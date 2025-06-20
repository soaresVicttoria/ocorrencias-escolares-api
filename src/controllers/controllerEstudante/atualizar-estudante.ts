import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.js";
import Estudante from "../../models/model-estudante.js";

export class AtualizarEstudanteController {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params;
    const { nome, responsavelId } = httpRequest.body;

    try {
      const estudante = await Estudante.findByPk(id);
      if (!estudante) {
        return {
          statusCode: 404,
          body: { error: "Responsável não encontrado" },
        };
      }
      await estudante.update({
        nome,
        responsavelId,
      });

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
