import {GetClassController } from "../../src/controllers/classes/get-by-id.class"

describe("pegar a classe pelo if ", () => {
    it("deve retornar 404 e a mensagem de 'Usuario não enconstrado' se o usuario não existir"), async() => {
        const controller = new GetClassController();
        const response = await controller.handle({
            params: {id: 2},
            body: null,
        });

        expect(response.statusCode).toBe(404)
        expect(response.body.error).toBe("Usuario não encontrado")
    }
    it("Deve retornar 200 e exibir a mensagem 'usuario encontrado ' e mostrar o usuario", async () => {
        const controller = new GetClassController();
        const response = await controller.handle({
            params: {id: 1},
            body: null,
        })

        expect(response.statusCode).toBe(200)
        expect(response.body.error).toBe(1)
    })
})