import  express from 'express'
import { getFoodAll, createFood, updateFood, deleteFood, getFoodWithPaging } from '../controllers/foodController.js'

const foodRouter = express.Router()

foodRouter.get("", getFoodAll)
foodRouter.post("", createFood)
foodRouter.put("", updateFood)
foodRouter.delete("/:id", deleteFood)
foodRouter.get("/paging/:page/:pageSize", getFoodWithPaging)

export default foodRouter
