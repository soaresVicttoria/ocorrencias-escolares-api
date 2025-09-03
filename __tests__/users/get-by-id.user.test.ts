import { GetUserController } from "../../src/controllers/users/get-by-id.user";

describe("GetUserController", () => {
  it("Deve retornar 404 e a mensagem de 'Usuário não encontrado' se o usuário não existir", async () => {
    const controller = new GetUserController();
    const response = await controller.handle({
      params: { id: 2 },
      body: null,
    });

    expect(response.statusCode).toBe(404);
    expect(response.body.error).toBe("Usuário não encontrado");
  });

  it("Deve retornar 200 e exibir o usuário se o usuário existir", async () => {
    const controller = new GetUserController();
    const response = await controller.handle({
      params: { id: 1 },
      body: null,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.user.id).toBe(1);
  });
});
