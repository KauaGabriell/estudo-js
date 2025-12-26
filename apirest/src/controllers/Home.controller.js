class HomeController {
  async index(req, res) {
    res.json({
      message: "Servidor Rodando!",
      ok: true,
    });
  }
}

export default new HomeController()
