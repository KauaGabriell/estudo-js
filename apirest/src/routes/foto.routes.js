import { Router } from "express";

import FotoController from "../controllers/Foto.controller.js";

const router = new Router();

router.post("/", FotoController.index);

export default router;
