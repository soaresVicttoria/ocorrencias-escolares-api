import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.interface";
import { GradeLevelModel } from "../../models/grade-level.model";

export class DeleteGradeLevelController implements Controller {
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

      await gradeLevel.destroy();

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
