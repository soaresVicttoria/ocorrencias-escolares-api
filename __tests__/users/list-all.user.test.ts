import { ListUsersController } from "../../src/controllers/users/list-all.user";

describe("ListUsersController", () => {
  it("Deve retornar 404 e a mensagem 'Usuários não encontrados' se os usuários não existirem", async () => {
    const controller = new ListUsersController();
    const response = await controller.handle({
      params: null,
      body: null,
    });

    expect(response.statusCode).toBe(404);
    expect(response.body.error).toBe("Usuários não encontrados");
  });
});
