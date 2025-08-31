import { Op } from "sequelize";
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.interface";
import { GradeLevelModel } from "../../models/grade-level.model";

export class UpdateGradeLevelController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      const { gradeLevel: newGradeLevel } = httpRequest.body;
      const gradeLevel = await GradeLevelModel.findByPk(id);

      if (!gradeLevel) {
        return {
          statusCode: 404,
          body: { error: "Serie não encontrada" },
        };
      }

      const gradeLevelExists = await GradeLevelModel.findOne({
        where: { gradeLevel: newGradeLevel, id: { [Op.ne]: id } },
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

      await gradeLevel.update({
        gradeLevel: newGradeLevel,
      });

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
