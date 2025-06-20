import { Router } from "express";
import { routerAdapter } from "../../adapters/express-adapter-router.js";
import { ListarEstudanteController } from "../../controllers/controllerEstudante/listar-estudante.js";

export default (router: Router): void => {
  /**
   * @swagger
   * /api/estudante/{id}:
   *   get:
   *     summary: Retorna o estudante pelo ID
   *     tags: [Estudantes]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: O ID do estudante
   *     responses:
   *       200:
   *         description: Estudante encontrado com sucesso!
   *       404:
   *         description: Estudante não encontrado!
   *       500:
   *         description: Erro interno do servidor
   */

  router.get("/estudante/:id", routerAdapter(new ListarEstudanteController()));
};
