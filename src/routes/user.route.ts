import { Router } from "express";
import { CreateUserController } from "../controllers/users/create.user";
import { DeleteUserController } from "../controllers/users/delete.user";
import { GetUserController } from "../controllers/users/get-by-id.user";
import { ListUsersController } from "../controllers/users/list-all.user";
import { UpdateUserController } from "../controllers/users/update.user";
import routeAdapter from "../adapters/route.adapter";

export default (router: Router): void => {
  router.get("/users", routeAdapter(new ListUsersController()));
  router.get("/users/:id", routeAdapter(new GetUserController()));
  router.post("/users", routeAdapter(new CreateUserController()));
  router.put("/users/:id", routeAdapter(new UpdateUserController()));
  router.delete("/users/:id", routeAdapter(new DeleteUserController()));
};
