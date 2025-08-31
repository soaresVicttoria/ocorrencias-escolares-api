import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.interface";
import { GradeLevelModel } from "../../models/grade-level.model";

export class ListGradeLevelsController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const gradeLevels = await GradeLevelModel.findAll();

      if (!gradeLevels) {
        return {
          statusCode: 404,
          body: { error: "Series não encontradas" },
        };
      }

      return {
        statusCode: 200,
        body: { gradeLevels },
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}
