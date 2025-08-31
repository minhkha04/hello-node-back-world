import express from 'express'
import { getFoodAll, createFood, updateFood, deleteFood, getFoodWithPaging } from '../controllers/foodController.js'
import upload from '../controllers/uploadControler.js'

const foodRouter = express.Router()

// __dirname: current directory of this file
// process.cwd(): current working directory when starting the node process

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
