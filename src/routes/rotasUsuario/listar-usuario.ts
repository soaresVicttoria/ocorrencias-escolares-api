import { Router } from "express";
import { routerAdapter } from "../../adapters/express-adapter-router.js";
import { ListarUsuarioController } from "../../controllers/controllerUsuario/listar-usuario.js";

export default (router: Router): void => {
  /**
   * @swagger
   * /api/usuario/{id}:
   *   get:
   *     summary: Retorna o usuário pelo ID
   *     tags: [Usuarios]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: O ID do usuário
   *     responses:
   *       200:
   *         description: Usuário encontrado com sucesso!
   *       404:
   *         description: Usuário não encontrado!
   *       500:
   *         description: Erro interno do servidor
   */

  router.get("/usuario/:id", routerAdapter(new ListarUsuarioController()));
};
