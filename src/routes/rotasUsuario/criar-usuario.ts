import { Router } from "express";
import { routerAdapter } from "../../adapters/express-adapter-router.js";
import { CriarUsuarioController } from "../../controllers/controllerUsuario/criar-usuario.js";

export default (router: Router): void => {
  /**
   * @swagger
   * components:
   *   schemas:
   *     Usuario:
   *       type: object
   *       required:
   *         - id
   *         - nome
   *         - cpf
   *         - cargo
   *         - senha
   *       properties:
   *         id:
   *           type: number
   *           description: O identificador do usuário
   *         nome:
   *           type: string
   *           description: O nome do usuário
   *         cpf:
   *           type: string
   *           description: O CPF do usuário
   *         cargo:
   *           type: string
   *           description: O cargo do usuário
   *         senha:
   *           type: string
   *           description: A senha do usuário
   *       example:
   *         id: 1
   *         nome: "Alexandre"
   *         cpf: "62775886051"
   *         cargo: "Professor"
   *         senha: "a123"
   */

  /**
   * @swagger
   * tags:
   *   name: Usuarios
   *   description: Gerenciar Usuários
   */

  /**
   * @swagger
   * /api/usuario:
   *  post:
   *     tags: [Usuarios]
   *     summary: Cria um usuário
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Usuario'
   *     responses:
   *       201:
   *         description: Usuário criado com sucesso!
   *       500:
   *         description: Erro interno do servidor
   */

  router.post("/usuario", routerAdapter(new CriarUsuarioController()));
};
