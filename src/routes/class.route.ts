import { CreateClassController } from "../controllers/classes/create.class";
import { GetClassController } from "../controllers/classes/get-by-id.class";
import { ListClassesController } from "../controllers/classes/list-all.class";
import { UpdateClassController } from "../controllers/classes/update.class";
import { DeleteClassController } from "../controllers/classes/delete.class";
import { Router } from "express";
import routeAdapter from "../adapters/route.adapter";

export default (router: Router): void => {
  router.get("/classes", routeAdapter(new ListClassesController()));
  router.get("/classes/:id", routeAdapter(new GetClassController()));
  router.post("/classes", routeAdapter(new CreateClassController()));
  router.put("/classes/:id", routeAdapter(new UpdateClassController()));
  router.delete("/classes/:id", routeAdapter(new DeleteClassController()));
};
