import { Router } from "express";
import AlunoController from "../controllers/Aluno.controller.js";

const router = new Router();

router.get("/", AlunoController.index);
router.post("/", AlunoController.createAluno);
router.get("/:id", AlunoController.show);
router.put("/:id", AlunoController.update);
router.delete("/:id", AlunoController.delete);

export default router;
