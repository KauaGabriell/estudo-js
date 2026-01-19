import { Router } from "express";
import AlunoController from "../controllers/Aluno.controller.js";
import loginRequired from "../middlewares/loginRequired.js";

const router = new Router();

router.get("/", AlunoController.index);
router.post("/", loginRequired, AlunoController.createAluno);
router.get("/:id", AlunoController.show);
router.put("/:id", loginRequired, AlunoController.update);
router.delete("/:id", loginRequired, AlunoController.delete);

export default router;
