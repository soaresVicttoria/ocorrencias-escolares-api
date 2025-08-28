import { Role } from "../../enums/role.enum";
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../interfaces/index.interface";
import { UserModel } from "../../models/user.model";
import { Op } from "sequelize";
import { hash } from "bcrypt";

export class UpdateUserController implements Controller {
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

      const { name, cpf, role, password } = httpRequest.body;
      const usersCpf = await UserModel.findOne({
        where: { cpf, id: { [Op.ne]: id } },
      });

      if (usersCpf) {
        return {
          status: 400,
          body: {
            error:
              "O CPF do usuário deve ser único. Este CPF já está cadastrado",
          },
        };
      }

      if (!Object.values(Role).includes(role)) {
        return {
          status: 404,
          body: { error: "Cargo não encontrado" },
        };
      }

      const salt = 10;
      const encryptedPassword = await hash(password, salt);

      await user.update({
        name,
        cpf,
        role,
        password: encryptedPassword,
      });

      return {
        status: 200,
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
