import { HttpRequest, HttpResponse } from "../../interfaces/index.js";
import Responsavel from "../../models/model-responsavel.js";

export class CriarResponsavelController {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { nome, contato } = httpRequest.body;

    try {
      const responsavel = await Responsavel.create({
        nome,
        contato,
      });

      return {
        statusCode: 201,
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
