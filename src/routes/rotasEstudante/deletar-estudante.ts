import { Router } from "express";
import { routerAdapter } from "../../adapters/express-adapter-router.js";
import { DeletarEstudanteController } from "../../controllers/controllersEstudante/deletar-estudante.js";

export default (router: Router): void => {
  /**
   * @swagger
   * /api/estudante/{id}:
   *   delete:
   *     summary: Remove um estudante pelo ID
   *     tags: [Estudantes]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: O ID do estudante
   *     responses:
   *       204:
   *         description: Estudante deletado com sucesso!
   *       404:
   *         description: Estudante não encontrado!
   *       500:
   *         description: Erro interno do servidor
   */

  router.delete(
    "/estudante/:id",
    routerAdapter(new DeletarEstudanteController())
  );
};
