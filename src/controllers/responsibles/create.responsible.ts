import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.interface";
import { ResponsibleModel } from "../../models/responsible.model";

export class CreateResponsibleController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, phoneNumber } = httpRequest.body;

      if (!name || !phoneNumber) {
        return {
          statusCode: 400,
          body: { error: "Todos os campos devem ser preenchidos!" },
        };
      }

      const responsible = await ResponsibleModel.create({
        name,
        phoneNumber,
      });

      return {
        statusCode: 201,
        body: { responsible },
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}
