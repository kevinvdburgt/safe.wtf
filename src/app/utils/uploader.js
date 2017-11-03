import multer from 'multer';
import path from 'path';
import phonetic from './phonetic';

const uploader = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `${__dirname}/../../../uploads/`);
    },
    filename: (req, file, cb) => {
      let filename = '';

      do {
        filename = phonetic(8) + path.extname(file.originalname);
      } while(false);

      cb(null, filename);
    },
  }),
  limits: {

  },
  fileFilter: (req, file, cb) => {
    cb(null, true);
  }
}).array('files[]');

export default uploader;
