import { Router } from "express";
import { routerAdapter } from "../../adapters/express-adapter-router.js";
import { AtualizarEstudanteController } from "../../controllers/controllerEstudante/atualizar-estudante.js";

export default (router: Router): void => {
  /**
   * @swagger
   * /api/estudante/{id}:
   *   put:
   *     summary: Atualiza um estudante pelo ID
   *     tags: [Estudantes]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: O ID do estudante
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Estudante'
   *     responses:
   *       200:
   *         description: Estudante atualizado com sucesso!
   *       404:
   *         description: Estudante não encontrado!
   *       500:
   *         description: Erro interno do servidor
   */

  router.put(
    "/estudante/:id",
    routerAdapter(new AtualizarEstudanteController())
  );
};
