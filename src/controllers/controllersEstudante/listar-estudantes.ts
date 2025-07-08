import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.js";
import Estudante from "../../models/model-estudante.js";

export class ListarEstudantesController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const estudantes = Estudante.findAll();
      return {
        statusCode: 200,
        body: estudantes,
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}
