import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.js";
import Usuario from "../../models/model-usuario.js";

export class DeletarUsuarioController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params;

    try {
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return {
          statusCode: 404,
          body: { error: "Usuário não encontrado" },
        };
      }

      await usuario.destroy();
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
