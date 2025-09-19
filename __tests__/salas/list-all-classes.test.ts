import { ListClassesController } from "../../src/controllers/classes/list-all.class"

describe("Listar Class", () => {
    it("Deve retornar 404 e exibir a mensagem 'classe não encontrada, ou não existe' caso a classe não exista", async () => {

        const controller = new ListClassesController();
        const response = await controller.handle({
            params: null,
            body: null,
        });

        expect(response.statusCode).toBe(404);
        expect(response.body.error).toBe("Classe não encontrado ")
    })
})