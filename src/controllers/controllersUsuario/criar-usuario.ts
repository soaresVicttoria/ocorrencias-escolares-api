import { HttpRequest, HttpResponse } from "../../interfaces/index.js";
import Usuario from "../../models/model-usuario.js";

export class CriarUsuarioController {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { nome, cpf, cargo, senha } = httpRequest.body;

    try {
      const usuario = await Usuario.create({
        nome,
        cpf,
        cargo,
        senha,
      });

      return {
        statusCode: 201,
        body: usuario,
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}
