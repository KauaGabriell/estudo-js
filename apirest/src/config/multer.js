import multer from "multer";
import { resolve, extname } from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";
import { dirname } from "path";

// ✅ Fix para __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  // Limites de Segurança
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB máximo
  },

  //  Filtro de Tipo de Arquivo
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/webp",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },

  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, "..", "..", "uploads", "images"));
    },
    filename: (req, file, cb) => {
      // UUID para garantir unicidade absoluta
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const fileName = `${hash.toString("hex")}${extname(file.originalname)}`;
        cb(null, fileName);
      });
    },
  }),
};
