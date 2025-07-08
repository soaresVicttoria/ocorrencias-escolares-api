import { Router } from "express";
import { routerAdapter } from "../../adapters/express-adapter-router.js";
import { CriarResponsavelController } from "../../controllers/controllersResponsavel/criar-responsavel.js";

export default (router: Router): void => {
  /**
   * @swagger
   * components:
   *   schemas:
   *     Responsavel:
   *       type: object
   *       required:
   *         - id
   *         - nome
   *         - contato
   *       properties:
   *         id:
   *           type: number
   *           description: O identificador do responsável
   *         nome:
   *           type: string
   *           description: O nome do responsável
   *         contato:
   *           type: string
   *           description: O contato do responsável
   *       example:
   *         id: 1
   *         nome: "Alexandre"
   *         contato: "6735245475"
   */

  /**
   * @swagger
   * tags:
   *   name: Responsaveis
   *   description: Gerenciar Responsáveis
   */

  /**
   * @swagger
   * /api/responsavel:
   *  post:
   *     tags: [Responsaveis]
   *     summary: Cria um responsável
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Responsavel'
   *     responses:
   *       201:
   *         description: Responsável criado com sucesso!
   *       500:
   *         description: Erro interno do servidor
   */

  router.post("/responsavel", routerAdapter(new CriarResponsavelController()));
};
