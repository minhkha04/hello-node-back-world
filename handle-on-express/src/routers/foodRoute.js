import express from 'express'
import multer from 'multer'
import { getFoodAll, createFood, updateFood, deleteFood, getFoodWithPaging } from '../controllers/foodController.js'

const foodRouter = express.Router()

// __dirname: current directory of this file
// process.cwd(): current working directory when starting the node process


const storage = multer.diskStorage({
    destination: process.cwd() + "/public/image",
    filename: (req, file, cb) => cb(null, new Date().getTime() + "_" + file.originalname)
})

const upload = multer({ storage: storage })

foodRouter.get("", getFoodAll)
foodRouter.post("", createFood)
foodRouter.put("", updateFood)
foodRouter.delete("/:id", deleteFood)
foodRouter.get("/paging/:page/:pageSize", getFoodWithPaging)
foodRouter.post("/upload", upload.single("file"), (req, res) => {
    let file = req.file
    res.json(file)
})

export default foodRouter
