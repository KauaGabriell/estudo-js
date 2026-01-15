import jwt from "jsonwebtoken";
import User from "../models/User.js";
export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ errors: ["Usuário precisa estar logado"] });
  }

  const [, token] = authorization.split(" "); //Texto do 'Bearer" na primeira variável.

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await User.findOne({ where: { id, email } });

    if (!user) {
      return res.status(401).json({ errors: ["Usuário Inválido"] });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
    // eslint-disable-next-line no-unused-vars
  } catch (e) {
    return res.status(401).json({ errors: ["Token Inválido"] });
  }
};
