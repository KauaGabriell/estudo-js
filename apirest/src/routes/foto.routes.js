import { Router } from "express";
import multer from "multer";

import multerConfig from "../config/multer.js";
import FotoController from "../controllers/Foto.controller.js";

const upload = multer(multerConfig);

const router = new Router();

router.post("/", upload.single('foto'), FotoController.index);

export default router;
