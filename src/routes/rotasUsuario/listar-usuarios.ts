import { Router } from "express";
import { routerAdapter } from "../../adapters/express-adapter-router.js";
import { ListarUsuariosController } from "../../controllers/controllerUsuario/listar-usuarios.js";

export default (router: Router): void => {
  /**
   * @swagger
   * /api/usuarios:
   *  get:
   *     tags: [Usuarios]
   *     summary: Retorna uma lista com todos os usuários
   *     responses:
   *      200:
   *        description: Uma lista de todos os usuários!
   *        content:
   *          application/json:
   *            schema:
   *              type: array
   *              items:
   *                $ref: '#/components/schemas/Usuario'
   *      500:
   *        description: Erro interno do servidor
   */

  router.get("/usuarios", routerAdapter(new ListarUsuariosController()));
};
