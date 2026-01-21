import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "alunos_fotos", // Nome da pasta no Cloudinary
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

export default {
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/pjpeg" ||
      file.mimetype === "image/webp"
    ) {
      return cb(null, true);
    }
    return cb(new multer.MulterError("Arquivo precisa ser PNG ou JPG."));
  },
  storage: storage, // Apontando para a nuvem
};