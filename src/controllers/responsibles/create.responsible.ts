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
          status: 400,
          body: { error: "Todos os campos devem ser preenchidos!" },
        };
      }

      const user = await ResponsibleModel.create({
        name,
        phoneNumber,
      });

      return {
        status: 201,
        body: user,
      };
    } catch (error: any) {
      return {
        status: 500,
        body: { error: error.message },
      };
    }
  }
}
