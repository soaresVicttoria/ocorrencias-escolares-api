import { Router } from "express";
import { CreateResponsibleController } from "../controllers/responsibles/create.responsible";
import { DeleteResponsibleController } from "../controllers/responsibles/delete.responsible";
import { ListResponsiblesController } from "../controllers/responsibles/list-all.responsible";
import { GetResponsibleController } from "../controllers/responsibles/get-by-id.responsible";
import { UpdateResponsibleController } from "../controllers/responsibles/update.responsible";
import routeAdapter from "../adapters/route.adapter";

export default (router: Router): void => {
  router.get("/responsibles", routeAdapter(new ListResponsiblesController()));
  router.get("/responsibles/:id", routeAdapter(new GetResponsibleController()));
  router.post("/responsibles", routeAdapter(new CreateResponsibleController()));
  router.put(
    "/responsibles/:id",
    routeAdapter(new UpdateResponsibleController())
  );
  router.delete(
    "/responsibles/:id",
    routeAdapter(new DeleteResponsibleController())
  );
};
