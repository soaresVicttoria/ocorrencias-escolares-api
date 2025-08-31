import { CreateGradeLevelController } from "../controllers/grade-levels/create.grade-level";
import { DeleteGradeLevelController } from "../controllers/grade-levels/delete.grade-level";
import { GetGradeLevelController } from "../controllers/grade-levels/get-by-id.grade-level";
import { ListGradeLevelsController } from "../controllers/grade-levels/list-all.grade-level";
import { UpdateGradeLevelController } from "../controllers/grade-levels/update.grade-level";
import routeAdapter from "../adapters/route.adapter";
import { Router } from "express";

export default (router: Router): void => {
  router.get("/grade-levels", routeAdapter(new ListGradeLevelsController()));
  router.get("/grade-levels/:id", routeAdapter(new GetGradeLevelController()));
  router.post("/grade-levels", routeAdapter(new CreateGradeLevelController()));
  router.put(
    "/grade-levels/:id",
    routeAdapter(new UpdateGradeLevelController())
  );
  router.delete(
    "/grade-levels/:id",
    routeAdapter(new DeleteGradeLevelController())
  );
};
