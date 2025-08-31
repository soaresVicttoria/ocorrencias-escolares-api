import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.interface";
import { UserModel } from "../../models/user.model";

export class GetUserController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      const user = await UserModel.findByPk(id);

      if (!user) {
        return {
          statusCode: 404,
          body: { error: "Usuário não encontrado" },
        };
      }

      return {
        statusCode: 200,
        body: { user },
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}
