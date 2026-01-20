import { Router } from "express";
import FotoController from "../controllers/Foto.controller.js";
import loginRequired from "../middlewares/loginRequired.js";
const router = new Router();

router.post("/", loginRequired, FotoController.create);

export default router;
