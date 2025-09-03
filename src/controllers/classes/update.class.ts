import { GradeLevels } from "../../enums/grade-levels.enum";
import { Shifts } from "../../enums/shifts.enum";
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.interface";
import { ClassModel } from "../../models/class.model";

export class UpdateClassController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      const foundClass = await ClassModel.findByPk(id);

      if (!foundClass) {
        return {
          statusCode: 404,
          body: { error: "Turma não encontrada" },
        };
      }

      const { className, gradeLevel, shift } = httpRequest.body;

      if (!Object.values(GradeLevels).includes(gradeLevel)) {
        return {
          statusCode: 404,
          body: { error: "Série não encontrado" },
        };
      }

      if (!Object.values(Shifts).includes(shift)) {
        return {
          statusCode: 404,
          body: { error: "Turno não encontrado" },
        };
      }

      const updatedClass = await foundClass.update({
        className,
        gradeLevel,
        shift,
      });

      return {
        statusCode: 200,
        body: { updatedClass },
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}
