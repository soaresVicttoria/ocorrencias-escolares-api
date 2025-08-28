import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.interface";
import { UserModel } from "../../models/user.model";

export class DeleteUserController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      const user = await UserModel.findByPk(id);

      if (!user) {
        return {
          status: 404,
          body: { error: "Usuário não encontrado" },
        };
      }

      await user.destroy();

      return {
        status: 204,
        body: {},
      };
    } catch (error: any) {
      return {
        status: 500,
        body: { error: error.message },
      };
    }
  }
}
