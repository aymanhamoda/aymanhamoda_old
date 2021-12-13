import path from 'path'
import express from 'express'
import multer from 'multer'

const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, `uploads/${req.query.folderPath}`)
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.originalname}`
      // `${file.originalname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

function checkFileType(file, cb) {
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())

  if (extname) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`)
})

export default router
