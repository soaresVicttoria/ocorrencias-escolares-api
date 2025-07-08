import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.js";
import Usuario from "../../models/model-usuario.js";

export class ListarUsuariosController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const usuarios = Usuario.findAll();
      return {
        statusCode: 200,
        body: usuarios,
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}
