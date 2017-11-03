import uploader from '../utils/uploader';

// @TODO: Prevent duplication uploads, when this is detected,
// remove the last uploaded file and use the already existsing
// file. This should save a lot of storage when uploading the same
// stuff over and over again.

export const upload = async (req, res, next) => {
  uploader(req, res, async (err) => {
    if (err) {
      console.error(err);
      return res.json({ success: false, description: err });
    }

    if (req.files.length === 0) {
      return res.json({ success: false, description: 'no-files' });
    }

    let iteration = 1;
    const files = [];

    req.files.forEach(async (file) => {
      files.push({
        name: file.filename,
      });

      if (iteration === req.files.length) {
        res.json({ success: true, files });
      }

      iteration++;
    });
  });
};

export default { upload };
