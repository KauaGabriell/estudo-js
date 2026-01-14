import User from "../models/User.js";

class UserController {
  async createUser(req, res) {
    const novoUser = await User.create({
      nome: "Peixe",
      sobrenome: "Ramos",
      email: "peixe@2gmail.com",
      password: "K4u4!!!!!!",
    });
    console.log(novoUser);
    res.json(novoUser);
  }
}

export default new UserController();
