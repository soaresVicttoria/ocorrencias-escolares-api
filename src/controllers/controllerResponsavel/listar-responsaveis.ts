import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.js";
import Responsavel from "../../models/model-responsavel.js";

export class ListarResponsaveisController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const responsaveis = Responsavel.findAll();
      return {
        statusCode: 200,
        body: responsaveis,
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}
