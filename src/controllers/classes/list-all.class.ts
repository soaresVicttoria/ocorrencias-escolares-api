import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.interface";
import { ClassModel } from "../../models/class.model";

export class ListClassesController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const classes = await ClassModel.findAll();

      if (classes.length === 0) {
        return {
          statusCode: 404,
          body: { error: "As turmas não foram encontradas" },
        };
      }

      return {
        statusCode: 200,
        body: { classes },
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}
