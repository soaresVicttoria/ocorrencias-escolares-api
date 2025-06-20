import { HttpRequest, HttpResponse } from "../../interfaces/index.js";
import Estudante from "../../models/model-estudante.js";

export class CriarEstudanteController {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { nome, responsavelId } = httpRequest.body;

    try {
      const estudante = await Estudante.create({
        nome,
        responsavelId,
      });

      return {
        statusCode: 201,
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
