import multer from "multer";
import multerConfig from "../config/multer.js";

import Foto from "../models/Foto.js";

const upload = multer(multerConfig).single("foto");
class FotoController {
  create(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ errors: [err.code || 'UPLOAD_ERROR'] });
      }

      try {
        //Verificação de existência
        if (!req.file) {
          return res.status(400).json({ errors: ['Arquivo não enviado.'] });
        }

        const { originalname, filename } = req.file;
        const { aluno_id } = req.body; 

        // Chamada correta: Objeto como argumento
        // await garantido por try/catch
        const foto = await Foto.create({ 
          originalname, 
          filename, 
          aluno_id
        });

        return res.json(foto);
      } catch (e) {
        // Tratamento de erro granular
        if (e.name === 'SequelizeValidationError') {
          return res.status(400).json({
            errors: e.errors.map((err) => err.message),
          });
        }
        return res.status(500).json({ errors: ['Internal Server Error'] });
      }
    });
  }
}

export default new FotoController();
