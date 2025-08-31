import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.interface";
import { UserModel } from "../../models/user.model";
import { Role } from "../../enums/role.enum";
import { hash } from "bcrypt";

export class CreateUserController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, cpf, role, password } = httpRequest.body;

      if (!name || !cpf || !role || !password) {
        return {
          statusCode: 400,
          body: { error: "Todos os campos devem ser preenchidos" },
        };
      }

      const usersCpf = await UserModel.findOne({ where: { cpf } });

      if (usersCpf) {
        return {
          statusCode: 400,
          body: {
            error:
              "O CPF do usuário deve ser único. Este CPF já está cadastrado",
          },
        };
      }

      if (!Object.values(Role).includes(role)) {
        return {
          statusCode: 404,
          body: { error: "Cargo não encontrado" },
        };
      }

      const salt = 10;
      const encryptedPassword = await hash(password, salt);
      const user = await UserModel.create({
        name,
        cpf,
        role,
        password: encryptedPassword,
      });

      return {
        statusCode: 201,
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
