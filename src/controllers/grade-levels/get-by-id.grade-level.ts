import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.interface";
import { GradeLevelModel } from "../../models/grade-level.model";

export class GetGradeLevelController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      const gradeLevel = await GradeLevelModel.findByPk(id);

      if (!gradeLevel) {
        return {
          statusCode: 404,
          body: { error: "Serie não encontrada" },
        };
      }

      return {
        statusCode: 200,
        body: { gradeLevel },
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}
