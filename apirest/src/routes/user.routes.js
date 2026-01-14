import { Router } from "express";
import UserController from "../controllers/User.controller.js";

const router = new Router();

router.post("/", UserController.createUser);

export default router;
