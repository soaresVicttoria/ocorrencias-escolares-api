import { Router } from "express";
import { routerAdapter } from "../../adapters/express-adapter-router.js";
import { DeletarUsuarioController } from "../../controllers/controllerUsuario/deletar-usuario.js";

export default (router: Router): void => {
  /**
   * @swagger
   * /api/usuario/{id}:
   *   delete:
   *     summary: Remove um usuário pelo ID
   *     tags: [Usuarios]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: O ID do usuário
   *     responses:
   *       204:
   *         description: Usuário deletado com sucesso!
   *       404:
   *         description: Usuário não encontrado!
   *       500:
   *         description: Erro interno do servidor
   */

  router.delete("/usuario/:id", routerAdapter(new DeletarUsuarioController()));
};
