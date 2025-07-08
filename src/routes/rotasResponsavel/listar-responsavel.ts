import { Router } from "express";
import { routerAdapter } from "../../adapters/express-adapter-router.js";
import { ListarResponsavelController } from "../../controllers/controllersResponsavel/listar-responsavel.js";

export default (router: Router): void => {
  /**
   * @swagger
   * /api/responsavel/{id}:
   *   get:
   *     summary: Retorna o responsável pelo ID
   *     tags: [Responsaveis]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: O ID do responsável
   *     responses:
   *       200:
   *         description: Responsável encontrado com sucesso!
   *       404:
   *         description: Responsável não encontrado!
   *       500:
   *         description: Erro interno do servidor
   */

  router.get(
    "/responsavel/:id",
    routerAdapter(new ListarResponsavelController())
  );
};
