import { Router } from "express";
import { routerAdapter } from "../../adapters/express-adapter-router.js";
import { ListarEstudantesController } from "../../controllers/controllersEstudante/listar-estudantes.js";

export default (router: Router): void => {
  /**
   * @swagger
   * /api/estudantes:
   *  get:
   *     tags: [Estudantes]
   *     summary: Retorna uma lista com todos os estudantes
   *     responses:
   *      200:
   *        description: Uma lista de todos os estudantes!
   *        content:
   *          application/json:
   *            schema:
   *              type: array
   *              items:
   *                $ref: '#/components/schemas/Estudante'
   *      500:
   *        description: Erro interno do servidor
   */

  router.get("/estudantes", routerAdapter(new ListarEstudantesController()));
};
