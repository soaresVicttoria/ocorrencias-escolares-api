import { Router } from "express";
import { routerAdapter } from "../../adapters/express-adapter-router.js";
import { AtualizarUsuarioController } from "../../controllers/controllerUsuario/atualizar-usuario.js";

export default (router: Router): void => {
  /**
   * @swagger
   * /api/usuario/{id}:
   *   put:
   *     summary: Atualiza um usuário pelo ID
   *     tags: [Usuarios]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: O ID do usuário
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Usuario'
   *     responses:
   *       200:
   *         description: Usuário atualizado com sucesso!
   *       404:
   *         description: Usuário não encontrado!
   *       500:
   *         description: Erro interno do servidor
   */

  router.put("/usuario/:id", routerAdapter(new AtualizarUsuarioController()));
};
