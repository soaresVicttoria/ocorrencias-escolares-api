import { Router } from "express";
import { routerAdapter } from "../../adapters/express-adapter-router.js";
import { ListarResponsaveisController } from "../../controllers/controllersResponsavel/listar-responsaveis.js";

export default (router: Router): void => {
  /**
   * @swagger
   * /api/responsaveis:
   *  get:
   *     tags: [Responsaveis]
   *     summary: Retorna uma lista com todos os responsáveis
   *     responses:
   *      200:
   *        description: Uma lista de todos os responsáveis!
   *        content:
   *          application/json:
   *            schema:
   *              type: array
   *              items:
   *                $ref: '#/components/schemas/Responsavel'
   *      500:
   *        description: Erro interno do servidor
   */

  router.get(
    "/responsaveis",
    routerAdapter(new ListarResponsaveisController())
  );
};
