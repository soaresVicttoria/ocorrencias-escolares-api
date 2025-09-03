import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.interface";
import { UserModel } from "../../models/user.model";

export class ListUsersController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const users = await UserModel.findAll();

      if (users.length === 0) {
        return {
          statusCode: 404,
          body: { error: "Os usuários não foram encontrados" },
        };
      }

      return {
        statusCode: 200,
        body: { users },
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}
