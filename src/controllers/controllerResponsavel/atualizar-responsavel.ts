import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.js";
import Responsavel from "../../models/model-responsavel.js";

export class AtualizarResponsavelController {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params;
    const { nome, contato } = httpRequest.body;

    try {
      const responsavel = await Responsavel.findByPk(id);
      if (!responsavel) {
        return {
          statusCode: 404,
          body: { error: "Responsável não encontrado" },
        };
      }
      await responsavel.update({
        nome,
        contato,
      });

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
