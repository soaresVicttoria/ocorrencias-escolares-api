import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.interface";
import { GradeLevelModel } from "../../models/grade-level.model";

export class CreateGradeLevelController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { gradeLevel } = httpRequest.body;

      if (!gradeLevel) {
        return {
          statusCode: 400,
          body: { error: "O campo serie deve ser preenchido" },
        };
      }

      const gradeLevelExists = await GradeLevelModel.findOne({
        where: { gradeLevel },
      });

      if (gradeLevelExists) {
        return {
          statusCode: 400,
          body: {
            error:
              "A serie da uma turma deve ser única. Esta serie já está cadastrada",
          },
        };
      }

      await GradeLevelModel.create({ gradeLevel });

      return {
        statusCode: 201,
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
