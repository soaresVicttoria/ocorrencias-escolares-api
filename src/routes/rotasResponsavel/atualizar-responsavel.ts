import { Router } from "express";
import { routerAdapter } from "../../adapters/express-adapter-router.js";
import { AtualizarResponsavelController } from "../../controllers/controllerResponsavel/atualizar-responsavel.js";

export default (router: Router): void => {
  /**
   * @swagger
   * /api/responsavel/{id}:
   *   put:
   *     summary: Atualiza um responsável pelo ID
   *     tags: [Responsaveis]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: O ID do responsável
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Responsavel'
   *     responses:
   *       200:
   *         description: Responsável atualizado com sucesso!
   *       404:
   *         description: Responsável não encontrado!
   *       500:
   *         description: Erro interno do servidor
   */

  router.put(
    "/responsavel/:id",
    routerAdapter(new AtualizarResponsavelController())
  );
};
