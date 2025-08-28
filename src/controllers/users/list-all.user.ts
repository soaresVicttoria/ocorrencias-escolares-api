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
          status: 404,
          body: { error: "Usuário não encontrados" },
        };
      }

      return {
        status: 200,
        body: users,
      };
    } catch (error: any) {
      return {
        status: 500,
        body: { error: error.message },
      };
    }
  }
}
