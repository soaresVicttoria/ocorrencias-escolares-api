import { GradeLevels } from "../../enums/grade-levels.enum";
import { Shifts } from "../../enums/shifts.enum";
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.interface";
import { ClassModel } from "../../models/class.model";

export class CreateClassController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { className, gradeLevel, shift } = httpRequest.body;

      if (!className || !gradeLevel || !shift) {
        return {
          statusCode: 400,
          body: { error: "Todos os campos devem ser preenchidos" },
        };
      }

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

      const newClass = await ClassModel.create({
        className,
        gradeLevel,
        shift,
      });

      return {
        statusCode: 201,
        body: { newClass },
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}
