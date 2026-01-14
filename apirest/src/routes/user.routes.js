import { Router } from "express";
import UserController from "../controllers/User.controller.js";

const router = new Router();

router.post("/create", UserController.createUser);
router.get("/index", UserController.index);
router.get("/show/:id", UserController.show);
router.put("/update/:id", UserController.update);
router.delete("/delete/:id", UserController.delete);

export default router;
