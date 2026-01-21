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
        if (!req.file) {
          return res.status(400).json({ errors: ['Arquivo não enviado.'] });
        }

        // NO CLOUDINARY: 'path' contém a URL completa da imagem.
        const { originalname, path } = req.file;
        const { aluno_id } = req.body; // Mantido conforme solicitado

        const foto = await Foto.create({
          originalname,
          // Salvamos a URL do Cloudinary na coluna 'filename' do banco
          filename: path, 
          aluno_id,
        });

        return res.json(foto);
      } catch (e) {
        console.error(e);
        if (e.name === 'SequelizeValidationError') {
          return res.status(400).json({
            errors: e.errors.map((err) => err.message),
          });
        }
        return res.status(500).json({ errors: ['Erro interno do servidor'] });
      }
    });
  }
}

export default new FotoController();