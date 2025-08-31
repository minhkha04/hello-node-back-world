import multer from 'multer'

const storage = multer.diskStorage({
    destination: process.cwd() + "/public/image",
    filename: (req, file, cb) => cb(null, new Date().getTime() + "_" + file.originalname)
})

const upload = multer({ storage: storage })

export default upload 