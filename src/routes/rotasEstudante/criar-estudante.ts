import { Router } from "express";
import { routerAdapter } from "../../adapters/express-adapter-router.js";
import { CriarEstudanteController } from "../../controllers/controllersEstudante/criar-estudante.js";

export default (router: Router): void => {
  /**
   * @swagger
   * components:
   *   schemas:
   *     Estudante:
   *       type: object
   *       required:
   *         - id
   *         - nome
   *         - responsavelId
   *       properties:
   *         id:
   *           type: number
   *           description: O identificador do estudante
   *         nome:
   *           type: string
   *           description: O nome do estudante
   *         responsavelId:
   *           type: number
   *           description: O ID do responsável
   *       example:
   *         id: 1
   *         nome: "Alex"
   *         responsavelId: 1
   */

  /**
   * @swagger
   * tags:
   *   name: Estudantes
   *   description: Gerenciar Estudantes
   */

  /**
   * @swagger
   * /api/estudante:
   *  post:
   *     tags: [Estudantes]
   *     summary: Cria um responsável
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Estudante'
   *     responses:
   *       201:
   *         description: Estudante criado com sucesso!
   *       500:
   *         description: Erro interno do servidor
   */

  router.post("/estudante", routerAdapter(new CriarEstudanteController()));
};
