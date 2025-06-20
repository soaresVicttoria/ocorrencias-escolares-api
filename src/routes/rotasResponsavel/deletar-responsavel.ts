import { Router } from "express";
import { routerAdapter } from "../../adapters/express-adapter-router.js";
import { DeletarResponsavelController } from "../../controllers/controllerResponsavel/deletar-responsavel.js";

export default (router: Router): void => {
  /**
   * @swagger
   * /api/responsavel/{id}:
   *   delete:
   *     summary: Remove um responsável pelo ID
   *     tags: [Responsaveis]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: O ID do responsável
   *     responses:
   *       204:
   *         description: Responsável deletado com sucesso!
   *       404:
   *         description: Responsável não encontrado!
   *       500:
   *         description: Erro interno do servidor
   */

  router.delete(
    "/responsavel/:id",
    routerAdapter(new DeletarResponsavelController())
  );
};
