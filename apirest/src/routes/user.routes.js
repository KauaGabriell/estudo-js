import { Router } from "express";
import UserController from "../controllers/User.controller.js";
import loginRequired from "../middlewares/loginRequired.js";

const router = new Router();
//Será removido.
// router.get("/", UserController.index);
// router.get("/:id", UserController.show);

router.post("/", UserController.createUser);
router.put("/", loginRequired, UserController.update);
router.delete("/", loginRequired, UserController.delete);

export default router;
