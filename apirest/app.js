import dotenv from "dotenv";
import express from "express";
import homeRoutes from "./src/routes/home.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import tokenRoutes from "./src/routes/token.routes.js";
import alunoRoutes from "./src/routes/aluno.routes.js";
import fotoRoutes from "./src/routes/foto.routes.js";

dotenv.config();

import "./src/database/index.js";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users", userRoutes);
    this.app.use("/tokens", tokenRoutes);
    this.app.use("/alunos", alunoRoutes);
    this.app.use("/fotos", fotoRoutes);
  }
}

export default new App().app;
