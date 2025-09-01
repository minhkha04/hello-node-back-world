import express from 'express'
import { getFoodAll, createFood, updateFood, deleteFood, getFoodWithPaging } from '../controllers/foodController.js'
import upload from '../controllers/uploadController.js'
import { checkToken, decodeToken } from '../config/jwt.js'

const foodRouter = express.Router()

// __dirname: current directory of this file
// process.cwd(): current working directory when starting the node process

foodRouter.get(
    "",
    (req, res, next) => {
        try {
            const authHeader = req.headers['authorization']
            const token = authHeader && authHeader.split(' ')[1]
            if (checkToken(token)) {
                let decode = decodeToken(token)
                if (decode.scope !== "admin") {
                    res.status(403).json({ message: "You do not have permission to access this resource" })
                    return
                }
                next()
            }
        } catch (err) {
            res.status(401).json({ message: err.message })
        }
    },
    getFoodAll
)
foodRouter.post("", createFood)
foodRouter.put("", updateFood)
foodRouter.delete("/:id", deleteFood)
foodRouter.get("/paging/:page/:pageSize", getFoodWithPaging)
foodRouter.post("/upload", upload.single("file"), (req, res) => {
    let file = req.file
    res.json(file)
})

export default foodRouter
