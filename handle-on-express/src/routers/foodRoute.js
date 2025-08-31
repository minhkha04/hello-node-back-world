import  express from 'express'
import { getFoodAll, createFood, updateFood, deleteFood } from '../controllers/foodController.js'

const foodRouter = express.Router()

foodRouter.get("", getFoodAll)
foodRouter.post("", createFood)
foodRouter.put("", updateFood)
foodRouter.delete("/:id", deleteFood)

export default foodRouter
